import prisma from "../../lib/prisma";

// create a function that takes an email as string and add it to the database
export default async function subscribe(req, res) {
    const email = req.body.email;

    // check if the email is already in the database
    const subscriber = await prisma.subscriber.findUnique({
        where: { email },
    });

    // if the email is already in the database, return an error
    if (subscriber) {
        return res.status(400).json({ error: "Email already subscribed" });
    }

    // if the email is not in the database, add it
    if (req.method === "POST") {
        const subscriber = await prisma.subscriber.create({
        data: { email },
        });
        res.json(subscriber);
    } else {
        throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}




