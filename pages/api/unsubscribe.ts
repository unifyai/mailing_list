import prisma from "@/lib/prisma";

// create a function that takes an email string and removes it from the database
export default async function unsubscribe(req, res) {
    const email = req.body.email;
    
    // check if the email is already in the database
    const subscriber = await prisma.subscriber.findUnique({
        where: { email },
    });

    // if the email is not in the database, return an error
    if (!subscriber) {
        return res.status(400).json({ error: "Email not subscribed" });
    }

    // if the email is in the database, remove it
    if (req.method === "POST") {
        const subscriber = await prisma.subscriber.delete({
        where: { email },
        });
        res.json(subscriber);
    }
    else {
        throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
        );
    }
}
