    export const TherapyList = [
    {
        id: "kinesio-taping-achilles",
        title: "Kinesio Taping Therapy for Achilles Tendon Rupture",
        desc: "Kinesio taping therapy can support Achilles tendon rupture recovery by reducing swelling, easing pain, and improving ankle awareness during rehabilitation.",
        fullContent: "Kinesio taping therapy can support Achilles tendon rupture recovery by reducing swelling, easing pain, and improving ankle awareness during rehabilitation. This guide explains how taping works, when it’s used across recovery phases, and how it safely complements physiotherapy-led treatment plans.",
        image: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=600",
        category: "Supportive"
    },
    {
        id: "hot-cold-therapy-achilles",
        title: "Hot and Cold Therapy for Achilles Tendon Rupture",
        desc: "Deciding between heat and ice? This guide explains when to use cold for swelling and heat for flexibility during recovery.",
        fullContent: "Recovering from an Achilles tendon rupture can be confusing, especially when deciding between heat and ice. This guide explains when to use cold therapy to reduce swelling and pain, when heat supports flexibility and circulation, and how to apply each safely during different recovery stages.",
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
        category: "Home Care"
    },
    {
        id: "pemf-therapy-achilles",
        title: "PEMF Therapy for Achilles Tendon Rupture",
        desc: "PEMF therapy is a non-invasive treatment that supports healing by reducing pain and stimulating tendon repair.",
        fullContent: "PEMF therapy for Achilles tendon rupture is a non-invasive treatment that supports healing by reducing pain, improving circulation, and stimulating tendon repair. Used alongside physiotherapy, it may help accelerate recovery, enhance tissue quality, and support a safer return to movement.",
        image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=600",
        category: "Advanced"
    }
    ];
    export const getTherapyById = (id) => TherapyList.find(t => t.id === id);