import React from 'react'
import Image from 'next/image'
import { IoMdTime } from "react-icons/io";
import Link from 'next/link';

export const recipesData = [
    {
      name: "Ofe Onugbu",
      time: 50,
      category: "igbo",
      description: 
      "Ofe Onugbu, or Bitterleaf Soup, is a traditional Igbo delicacy that tantalizes the taste buds with its rich blend of flavors. The soup features a hearty mix of bitterleaf, assorted meats such as beef, goat meat, and tripe, seasoned with an array of aromatic spices. The essence of this soup lies in the careful preparation of the bitterleaf, which is thoroughly washed to eliminate its natural bitterness. Ofe Onugbu is often enjoyed with fufu or rice, making it a wholesome and satisfying dish.",
      id: 1,
      author: 'Afrolems',
      author_description: "Afrolems is an African food blog with a specialization in Nigerian Food. Our main focus is to stylize African food so it can be internationalized. We aim to educate our followers with kitchen tips, Cooking Know-hows and interesting recipes from all over Africa and just modifications of recipes from other cultures. We also like to play with foreign recipes as well.",
      ingredients: [
        "Bitterleaf",
        "Assorted meats (beef, goat meat, tripe)",
        "Aromatic spices"

      ],
      procedure: "Wash the bitterleaf thoroughly to reduce bitterness.Prepare assorted meats by cutting them into desired sizes.Season the meats with aromatic spices and set aside.In a pot, combine bitterleaf, seasoned meats, and additional spices. Simmer on medium heat until meats are tender.Serve hot with fufu or rice.",
      image:[ 'Ofe-Onugbu1','Ofe-Onugbu2','Ofe-Onugbu3']
    },

    {
      name: "Fura da Nono",
      time: 30,
      category: "hausa",
      description: "Fura da Nono is a popular Hausa soup that stands out for its unique combination of millet balls and sour milk. The millet balls, made from fermented millet flour, are mixed with nono (sour milk) to create a refreshing and nutritious dish. Fura da Nono is not only a delicious treat but also a source of energy, making it a favored choice for breakfast or as a quick snack in Northern Nigerian households.",
      id: 2,
      author: 'Ajoke',
      author_description: "Hello, my name is Ajoke and welcome to my food world,  I love to cook in my lively little kitchen and I feel it is time to share my food knowledge with the rest of the food community and the world at large.  Join me in the adventure of cooking what we all call warm, hearty and quick meals. I cook African food with style, with a speciality in Nigerian food. I recreate menus from cookbooks around the world and I also like baking... I eat all the food I blog so nothing goes to waste. lol. Why cook it if you can't eat it?  Come on let's seek this adventure together. I hope you'll enjoy it as much as I do and hope to see you back here again soon.",
      ingredients: [
        "Millet balls",
        "Nono (sour milk)"
      ],
      procedure: "Mix millet balls, made from fermented millet flour, with nono (sour milk). Ensure a well-balanced combination for a refreshing and nutritious dish. Serve as a delicious treat for breakfast or a quick snack.",
      image: ['Fura-da-Nono1','Fura-da-Nono2','Fura-da-Nono2']
    },

    
    {
      name: "Efo Riro",
      time: 45,
      category: "yoruba",
      description: "Efo Riro, a vibrant and flavorful Yoruba soup, is a celebration of leafy vegetables, tomatoes, and peppers. The soup is prepared by simmering spinach or other green leafy vegetables with a rich blend of spices and assorted meats. Efo Riro is known for its bold and savory taste, with the vegetables contributing to its nutritional richness. This Yoruba delicacy is often enjoyed with pounded yam, rice, or other traditional staples, making it a wholesome and satisfying meal.",
      id: 3,
      author: 'Ajoke',
      author_description: "Hello, my name is Ajoke and welcome to my food world,  I love to cook in my lively little kitchen and I feel it is time to share my food knowledge with the rest of the food community and the world at large.  Join me in the adventure of cooking what we all call warm, hearty and quick meals. I cook African food with style, with a speciality in Nigerian food. I recreate menus from cookbooks around the world and I also like baking... I eat all the food I blog so nothing goes to waste. lol. Why cook it if you can't eat it?  Come on let's seek this adventure together. I hope you'll enjoy it as much as I do and hope to see you back here again soon.",
      ingredients: [
        "Spinach or green leafy vegetables",
        "Tomatoes",
        "Peppers",
        "Assorted meats",
        "Spices"
      ],
      procedure: "Simmer spinach or green leafy vegetables with a rich blend of spices and assorted meats. Cook until the vegetables are tender and flavors meld. Serve hot with pounded yam, rice, or other traditional staples.",
      image: ['Efo-riro1','Efo-riro2','Efo-riro3']
    },

    {
      name: "Oha Soup",
      time: 145,
      category: "igbo",
      description: "Oha Soup is a classic Igbo dish celebrated for its unique taste and nutritional value. Prepared with oha leaves, cocoyam, and a medley of assorted meats, the soup exudes a delightful aroma and a robust flavor profile. The combination of oha leaves and cocoyam lends a thick and velvety consistency to the soup. Typically seasoned with indigenous spices, Oha Soup is a comforting and nutritious choice, often served with pounded yam or fufu for a complete and fulfilling meal.",
      id: 4,
      author: 'Afrolems',
      author_description: "Afrolems is an African food blog with a specialization in Nigerian Food. Our main focus is to stylize African food so it can be internationalized. We aim to educate our followers with kitchen tips, Cooking Know-hows and interesting recipes from all over Africa and just modifications of recipes from other cultures. We also like to play with foreign recipes as well.",
      ingredients: [
        "Oha leaves",
        "Cocoyam",
        "Assorted meats",
        "Indigenous spices"
      ],
      procedure: "Wash and chop oha leaves finely. Peel and cut cocoyam into small pieces. Cook cocoyam until tender and mash to form a paste. In a pot, combine mashed cocoyam, oha leaves, and assorted meats. Season with indigenous spices and cook until flavors meld. Serve hot with pounded yam or fufu.",
      image: ['Oha-Soup1','Oha-Soup2','Oha-Soup3']
    },

    {
      name: "Nkwobi",
      time: 160,
      category: "igbo",
      description: "Nkwobi is a spicy and flavorful Igbo soup that features cow foot as its star ingredient. The dish is prepared by simmering cow foot until tender, then seasoned with utazi leaves, onions, and a host of aromatic spices. The resulting soup is rich, spicy, and bursting with umami flavors. Nkwobi is often served as a delightful appetizer or enjoyed with chilled drinks in social gatherings, making it a popular choice for celebratory occasions.",
      id: 5,
      author: 'My Diaspora Kitchen',
      author_description: "A food blog with easy to make recipes. No fluff just deliciousness 😋 including foolproof Instant pot and Air fryer recipes",
      ingredients: [
        "Cow foot",
        "Utazi leaves",
        "Onions",
        "Aromatic spices"
      ],
      procedure: "Simmer cow foot in a pot until tender. Season with chopped utazi leaves, onions, and aromatic spices. Allow the flavors to meld by simmering on low heat. Serve in small bowls, garnished with additional utazi leaves. Enjoy as an appetizer or with chilled drinks.",
      image: ['Nkwobi1','Nkwobi2','Nkwobi3']
    },

    {
      name: "Egusi Soup",
      time: 55,
      category: "igbo",
      description: "Egusi Soup is a beloved Igbo delicacy that showcases the culinary prowess of the region. This soup is characterized by a delectable blend of ground melon seeds, leafy vegetables, and a variety of meats or fish. The egusi seeds, when ground and cooked to perfection, contribute a thick and luscious texture to the soup. Egusi Soup is not only a gastronomic delight but also a nutritious option, offering a harmonious marriage of proteins, vitamins, and minerals. It is commonly paired with pounded yam or fufu for a truly authentic dining experience.",
      id: 6,
      author: 'Afrolems',
      author_description: "Afrolems is an African food blog with a specialization in Nigerian Food. Our main focus is to stylize African food so it can be internationalized. We aim to educate our followers with kitchen tips, Cooking Know-hows and interesting recipes from all over Africa and just modifications of recipes from other cultures. We also like to play with foreign recipes as well.",
      ingredients: [
        "Ground melon seeds",
        "Leafy vegetables",
        "Assorted meats or fish"
      ],
      procedure: "Grind melon seeds into a smooth paste. In a pot, combine the melon seed paste with assorted meats or fish. Add chopped leafy vegetables and season with spices. Cook on medium heat until the soup thickens. Serve hot with pounded yam or fufu.",
      image: ['Egusi-Soup1','Egusi-Soup2','Egusi-Soup3']
    },
    
    {
      name: "Miyan Kifi",
      time: 50,
      category: "hausa",
      description: "Miyan Kifi is a flavorful Hausa soup that highlights the deliciousness of shredded dried beef. The beef is seasoned and simmered to perfection, creating a rich and aromatic broth. Miyan Kifi is celebrated for its bold and spicy flavors, with the shredded beef adding a hearty and satisfying element to the dish. This soup is often enjoyed with traditional accompaniments like tuwon shinkafa or fufu, making it a favorite in Northern Nigerian households.",
      id: 7,
      author: 'Aliyah',
      author_description: "My name is Aliyah Sodamade. I am originally from Nigeria but I currently live in the United State. I like to eat, I love to cook, love to entertain. I also love traveling, on this website, you would find easy, simple but yet delicious recipes for your meals. My recipes are kids, family, and crowd-friendly.Cooking is not about sharing recipes, you need techniques and tips to make a good cook. I will be teaching/sharing some techniques you need in your kitchens that will help you to make delicious food you, and your family will enjoy, just stay glued!",
      ingredients: [
        "Shredded dried beef",
        "Spices",
        "Aromatic broth"
      ],
      procedure: "Season shredded dried beef and simmer until tender in an aromatic broth. Cook until the flavors meld and the broth reaches a rich consistency. Serve hot with traditional accompaniments like tuwon shinkafa or fufu.",
      image:['Miyan-Kifi1','Miyan-Kifi2','Miyan-Kifi2']
    },

    {
      name: "Abacha and Ugba",
      time: 80,
      category: "igbo",
      description: "Abacha and Ugba is a distinctive Igbo dish that combines the unique textures of cassava and oil bean seeds with an array of spices. This salad-like creation features dried and shredded cassava, ugba (oil bean seeds), utazi leaves, and other flavorful ingredients. The dish is then dressed with a tangy and spicy palm fruit oil-based sauce, creating a harmonious blend of flavors and textures. Abacha and Ugba is not only a culinary delight but also a cultural representation of the rich gastronomic heritage of the Igbo people.",
      id: 8,
      author: 'My Diaspora Kitchen',
      author_description: "A food blog with easy to make recipes. No fluff just deliciousness 😋 including foolproof Instant pot and Air fryer recipes",
      ingredients: [
        "Cassava",
        "Ugba (oil bean seeds)",
        "Utazi leaves",
        "Spices",
        "Palm fruit oil"
      ],
      procedure: "Soak and wash dried cassava thoroughly. Shred the cassava into thin strips. Combine shredded cassava with ugba, utazi leaves,",
      image: ['Abacha-and-Ugba1','Abacha-and-Ugba2','Abacha-and-Ugba3']
    },

    {
      name: "Isi Ewu",
      time: 45,
      category: "igbo",
      description: "Isi Ewu, or Goat Head Soup, is a bold and spicy delicacy that holds a special place in Igbo cuisine. The dish features succulent pieces of goat head, cooked to perfection and seasoned with utazi leaves, native spices, and a rich broth. Isi Ewu is renowned for its hearty and robust flavor, offering a satisfying experience for those who appreciate the adventurous side of culinary exploration. Often enjoyed with fufu or rice, this soup stands as a testament to the diverse and flavorful offerings of Igbo gastronomy.",
      id: 9,
      author: 'My Diaspora Kitchen',
      author_description: "A food blog with easy to make recipes. No fluff just deliciousness 😋 including foolproof Instant pot and Air fryer recipes",
      ingredients: [
        "Goat head",
        "Utazi leaves",
        "Native spices",
        "Rich broth"
      ],
      procedure: "Clean and cut the goat head into manageable pieces. Season the goat head with utazi leaves, native spices, and salt. Cook until tender, allowing the flavors to meld. Serve hot, garnished with additional utazi leaves. Enjoy with fufu or rice.",
      image: ['Isi-ewu1','Isi-ewu2','Isi-ewu3']
    },

    {
      name: "Ofe Owerri",
      time: 363,
      category: "igbo",
      description: "Ofe Owerri is a sumptuous Igbo soup that reflects the culinary opulence of the region. Comprising a delightful mix of assorted meats, vegetables, and indigenous spices, the soup boasts a complex and layered flavor profile. Ofe Owerri is distinguished by its vibrant colors, showcasing the abundance of fresh produce and meats used in its preparation. Often served with fufu or rice, this soup embodies the rich cultural and gastronomic heritage of the Igbo people, making it a cherished dish for communal feasts and special occasions.",
      id: 10,
      author: 'Afrolems',
      author_description: "Afrolems is an African food blog with a specialization in Nigerian Food. Our main focus is to stylize African food so it can be internationalized. We aim to educate our followers with kitchen tips, Cooking Know-hows and interesting recipes from all over Africa and just modifications of recipes from other cultures. We also like to play with foreign recipes as well.",
      ingredients: [
        "Assorted meats",
        "Vegetables",
        "Indigenous spices"
      ],
      procedure: "Prepare assorted meats by cutting them into desired sizes. In a pot, combine assorted meats, vegetables, and indigenous spices. Cook until the meats are tender and the flavors meld. Serve hot with fufu or rice, garnished with additional vegetables. Enjoy the sumptuous flavors of Ofe Owerri.",
      image: ['Ofe-Owerri1','Ofe-Owerri2','Ofe-Owerri3']
    },

    {
      name: "Ukodo",
      time: 60,
      category: "igbo",
      description: "Ukodo, a yam pepper soup variant, is a culinary masterpiece hailing from the Igbo community. This soup features yam, goat meat, and a medley of aromatic spices, creating a rich and spicy broth. The combination of ingredients results in a hearty and nourishing dish that captivates the senses with its bold flavors. Ukodo is a popular choice for festive occasions, bringing people together to savor the warmth and comfort of this traditional Igbo delight.",
      id: 11,
      author: 'Sisi Yemmie',
      author_description: "Sisi Yemmie creates and shares food recipe videos that are created as a result of experiments carried out in her kitchen on her YouTube channel, SisiYemmieTV. She also shares content on parenting, relationships and lifestyle. In 2018, she was profiled by CNN Africa alongside Linda Ikeji and Chiamaka Obuekwe as women who have struck social media gold.",
      ingredients: [
        "Yam",
        "Goat meat",
        "Aromatic spices"
      ],
      procedure: "Peel and cut yam into bite-sized pieces. Prepare goat meat by cutting it into desired sizes. In a pot, combine yam, goat meat, and aromatic spices. Simmer until yam is tender and the flavors meld. Serve hot as a comforting and flavorful dish for festive occasions.",
      image: ['Ukodo1','Ukodo2,','Ukodo3']
    },

    {
      name: "Miyan Taushe",
      time: 40,
      category: "hausa",
      description: "Miyan Taushe, or Pumpkin Soup, is a flavorful Hausa dish that combines the richness of pumpkin with the nuttiness of groundnut. The soup features a creamy blend of groundnut paste, pumpkin, and assorted meats, creating a delightful and nourishing culinary experience. Miyan Taushe is characterized by its smooth and velvety texture, making it a comforting choice that is often enjoyed with rice, fufu, or other staple foods.",
      id: 12,
      author: 'My Diaspora kitchen',
      author_description: "A food blog with easy to make recipes. No fluff just deliciousness 😋 including foolproof Instant pot and Air fryer recipes",
      ingredients: [
        "Groundnut paste",
        "Pumpkin",
        "Assorted meats"
      ],
      procedure: "Prepare a creamy blend of groundnut paste and pumpkin. Add assorted meats to the mixture for added flavor and nutrition. Cook until meats are tender and the soup reaches a velvety consistency. Serve hot, complementing the soup with rice, fufu, or other staple foods.",
      image: ['Miyan-Taushe1','Miyan-Taushe2','Miyan-Taushe3']
    },

    {
      name: "Miyan Zogale",
      time: 135,
      category: "hausa",
      description: "Miyan Zogale is a nutritious Hausa soup that showcases the goodness of moringa leaves. The soup is made by simmering dried moringa leaves with a variety of spices and meats, resulting in a flavorful and healthful dish. Miyan Zogale is celebrated for its vibrant green color and earthy taste, reflecting the natural goodness of moringa. It is often enjoyed with traditional accompaniments like tuwon shinkafa or masa, providing a wholesome and culturally rich dining experience.",
      id: 13,
      author: 'Ajoke',
      author_description: "Hello, my name is Ajoke and welcome to my food world,  I love to cook in my lively little kitchen and I feel it is time to share my food knowledge with the rest of the food community and the world at large.  Join me in the adventure of cooking what we all call warm, hearty and quick meals. I cook African food with style, with a speciality in Nigerian food. I recreate menus from cookbooks around the world and I also like baking... I eat all the food I blog so nothing goes to waste. lol. Why cook it if you can't eat it?  Come on let's seek this adventure together. I hope you'll enjoy it as much as I do and hope to see you back here again soon.",
      ingredients: [
       "Dried moringa leaves",
       "Spices",
       "Assorted meats"
     ],
      procedure: "Simmer dried moringa leaves with assorted meats and spices. Cook until meats are tender and flavors meld. Serve hot with traditional accompaniments like tuwon shinkafa or masa.",
      image: ['Miyan-Zogale1','Miyan-Zogale2','Miyan-Zogale3']
    },

    {
      name: "Miyan Karkashi",
      time: 25,
      category: "hausa",
      description: "Miyan Karkashi is a distinctive Hausa soup made from the powdered sun-dried leaves of the Karkashi plant. The leaves are carefully processed and combined with a flavorful broth made from assorted meats, creating a unique and aromatic dish. Miyan Karkashi is known for its earthy taste and nutritional benefits, making it a popular choice in Northern Nigerian cuisine. This soup is often enjoyed with fufu or rice, offering a hearty and satisfying meal.",
      id: 14,
      author: 'Aliyah',
      author_description: "My name is Aliyah Sodamade. I am originally from Nigeria but I currently live in the United State. I like to eat, I love to cook, love to entertain. I also love traveling, on this website, you would find easy, simple but yet delicious recipes for your meals. My recipes are kids, family, and crowd-friendly.Cooking is not about sharing recipes, you need techniques and tips to make a good cook. I will be teaching/sharing some techniques you need in your kitchens that will help you to make delicious food you, and your family will enjoy, just stay glued!",
      ingredients: [
       "Powdered Karkashi leaves",
       "Assorted meats",
       "Spices"
    ],
      procedure: "Combine powdered Karkashi leaves with a flavorful broth made from assorted meats and spices.\n2. Cook until meats are tender and flavors meld. Serve hot with fufu or rice.",
      image: ['Miyan-Karkashi1', 'Miyan-Karkashi2', 'Miyan-Karkashi3']
    },

    {
      name: "Obe Ata Dindin",
      time: 45,
      category: "yoruba",
      description: "Obe Ata Dindin, or Spicy Red Pepper Soup, is a fiery and flavorful Yoruba dish that features a rich blend of red peppers, tomatoes, and assorted meats. The soup is seasoned with a variety of spices, creating a bold and aromatic flavor profile. Obe Ata Dindin is often enjoyed with rice, yam, or other traditional staples, providing a satisfying and spicy culinary experience. This Yoruba delicacy is a testament to the bold and adventurous palates of the Yoruba people.",
      id: 15,
      author: 'Ajoke',
      author_description: "Hello, my name is Ajoke and welcome to my food world,  I love to cook in my lively little kitchen and I feel it is time to share my food knowledge with the rest of the food community and the world at large.  Join me in the adventure of cooking what we all call warm, hearty and quick meals. I cook African food with style, with a speciality in Nigerian food. I recreate menus from cookbooks around the world and I also like baking... I eat all the food I blog so nothing goes to waste. lol. Why cook it if you can't eat it?  Come on let's seek this adventure together. I hope you'll enjoy it as much as I do and hope to see you back here again soon.",
      ingredients: [
      "Red peppers",
      "Tomatoes",
      "Assorted meats",
      "Spices"
    ],
      procedure: "Blend red peppers and tomatoes into a rich paste. Cook the paste with assorted meats and a variety of spices. Serve hot with rice, yam, or other traditional staples.",
      image:['Obe-Ata-Dindin1','Obe-Ata-Dindin2','Obe-Ata-Dindin3']
    },

    {
      name: "Miyan Geda",
      time: 217,
      category: "hausa",
      description: "Miyan Geda is a delightful Hausa soup made from ground egusi seeds and spinach. The soup features a rich and nutty flavor profile, with the egusi seeds adding a thick and hearty consistency. Spinach and other vegetables contribute to the nutritional value of the dish, creating a well-balanced and satisfying meal. Miyan Geda is commonly served with traditional staples like tuwon shinkafa or fufu, offering a wholesome and culturally significant dining experience.",
      id: 16,
      author: 'Sisi Yemmie',
      author_description: "Sisi Yemmie creates and shares food recipe videos that are created as a result of experiments carried out in her kitchen on her YouTube channel, SisiYemmieTV. She also shares content on parenting, relationships and lifestyle. In 2018, she was profiled by CNN Africa alongside Linda Ikeji and Chiamaka Obuekwe as women who have struck social media gold.",
      ingredients: [
        "Ground egusi seeds",
        "Spinach",
        "Vegetables"
    ],
      procedure: "Combine ground egusi seeds with spinach and vegetables. Cook until the soup reaches a thick and hearty consistency. Serve hot with traditional staples like tuwon shinkafa or fufu.",
      image: ['Miyan-Geda1','Miyan-Geda2','Miyan-Geda3']
    },
      
    {
      name: "Efo Shoko",
      time: 40,
      category: "yoruba",
      description: "Efo Shoko is a delectable Yoruba soup made with shoko leaves, tomatoes, and peppers. The soup is carefully prepared to preserve the vibrant green color and nutritional goodness of the shoko leaves. Efo Shoko is known for its light and refreshing taste, often served with pounded yam, amala, or other traditional staples. This Yoruba delicacy is a celebration of fresh and locally sourced ingredients, offering a wholesome and culturally significant dining experience.",
      id: 17,
      author: 'Ajoke',
      author_description: "Hello, my name is Ajoke and welcome to my food world,  I love to cook in my lively little kitchen and I feel it is time to share my food knowledge with the rest of the food community and the world at large.  Join me in the adventure of cooking what we all call warm, hearty and quick meals. I cook African food with style, with a speciality in Nigerian food. I recreate menus from cookbooks around the world and I also like baking... I eat all the food I blog so nothing goes to waste. lol. Why cook it if you can't eat it?  Come on let's seek this adventure together. I hope you'll enjoy it as much as I do and hope to see you back here again soon.",
      ingredients: [
      "Shoko leaves",
      "Tomatoes",
      "Peppers"
    ],
      procedure: "Carefully prepare shoko leaves, tomatoes, and peppers to preserve their vibrant color and nutritional goodness. Cook the ingredients to create a light and refreshing soup. Serve hot with pounded yam, amala, or other traditional staples.",
      image: ['Efo-Shoko1','Efo-Shoko2','Efo-Shoko2']
    },

    {
      name: "Miyan Wake",
      time: 153,
      category: "hausa",
      description: "Miyan Wake is a delightful Hausa soup made with chicken, groundnut, and a medley of aromatic spices. The soup features a creamy and flavorful broth, with the groundnut paste adding a nutty richness to the dish. Miyan Wake is known for its comforting and satisfying taste, making it a popular choice in Northern Nigerian cuisine. It is often served with tuwon shinkafa or other traditional staples, offering a wholesome and culturally rich dining experience.",
      id: 18,
      author: 'Aliyah',
      author_description: "My name is Aliyah Sodamade. I am originally from Nigeria but I currently live in the United State. I like to eat, I love to cook, love to entertain. I also love traveling, on this website, you would find easy, simple but yet delicious recipes for your meals. My recipes are kids, family, and crowd-friendly.Cooking is not about sharing recipes, you need techniques and tips to make a good cook. I will be teaching/sharing some techniques you need in your kitchens that will help you to make delicious food you, and your family will enjoy, just stay glued!",
      ingredients: [
      "Chicken",
      "Groundnut",
      "Aromatic spices"
    ],
      procedure: "Cook chicken with groundnut and a medley of aromatic spices until tender. Prepare a creamy and flavorful broth. Serve hot with traditional staples like tuwon shinkafa.",
      image: ['Miyan-Wake1','Miyan-Wake2','Miyan-Wake3']
    },

    {
      name: "Amala and Ewedu",
      time: 90,
      category: "yoruba",
      description: "Amala and Ewedu is a classic Yoruba dish that combines the smoothness of yam flour (amala) with the lightness of ewedu soup. The ewedu soup, made from jute leaves, is cooked to perfection and served alongside the soft and swallowable amala. This Yoruba delicacy is often accompanied by assorted meats or fish, creating a harmonious blend of flavors and textures. Amala and Ewedu stands as a symbol of the rich culinary heritage of the Yoruba people, offering a delightful and culturally significant dining experience.",
      id: 19,
      author: 'Aliyah',
      author_description: "My name is Aliyah Sodamade. I am originally from Nigeria but I currently live in the United State. I like to eat, I love to cook, love to entertain. I also love traveling, on this website, you would find easy, simple but yet delicious recipes for your meals. My recipes are kids, family, and crowd-friendly.Cooking is not about sharing recipes, you need techniques and tips to make a good cook. I will be teaching/sharing some techniques you need in your kitchens that will help you to make delicious food you, and your family will enjoy, just stay glued!",
      ingredients: [
      "Yam flour (amala)",
      "Jute leaves",
      "Assorted meats or fish",
      "Spices"
    ],
      procedure: "Cook yam flour (amala) until smooth and swallowable. Prepare ewedu soup with jute leaves, assorted meats or fish, and spices. Serve hot, combining the smoothness of amala with the lightness of ewedu soup.",
      image: ['Amala-and-Ewedu1', 'Amala-and-Ewedu2', 'Amala-and-Ewedu3']
    },

    {
      name: "Okro Soup",
      time: 225,
      category: "igbo",
      description: "Okro Soup, a staple in Igbo cuisine, is celebrated for its slimy texture and delightful taste. The main ingredient, okra, is finely chopped and cooked with a flavorful broth made from assorted meats, spices, and vegetables. The slimy consistency, characteristic of well-prepared okra soup, adds a unique dimension to the dining experience. Typically served with fufu or rice, Okro Soup is a wholesome and comforting choice that reflects the culinary diversity of the Igbo people.",
      id: 20,
      author: 'Sisi Yemmie',
      author_description: "Sisi Yemmie creates and shares food recipe videos that are created as a result of experiments carried out in her kitchen on her YouTube channel, SisiYemmieTV. She also shares content on parenting, relationships and lifestyle. In 2018, she was profiled by CNN Africa alongside Linda Ikeji and Chiamaka Obuekwe as women who have struck social media gold.",
      ingredients: [
      "Okra",
      "Assorted meats",
      "Spices",
      "Vegetables"
    ],
      procedure: "Wash and chop okra into fine pieces. In a pot, combine chopped okra with seasoned assorted meats and spices. Add vegetables and cook until the okra becomes slimy. Simmer until flavors meld and the soup thickens. Serve hot with fufu or rice.",
      image: ['Okro1','Okro2','Okro3']
    },

    {
      name: "Dambu Nama",
      time: 60,
      category: "hausa",
      description: "Dambu Nama is a spiced shredded beef jerky that serves as a delicious side dish in Hausa cuisine. The beef is seasoned with a blend of spices, then sun-dried to perfection, creating a flavorful and satisfying treat. Dambu Nama is known for its bold and savory taste, making it a popular choice as a snack or accompaniment to main meals. This dish reflects the traditional culinary artistry of Northern Nigeria and is enjoyed by many for its rich flavor and convenience.",
      id: 21,
      author: 'Aliyah',
      author_description: "My name is Aliyah Sodamade. I am originally from Nigeria but I currently live in the United State. I like to eat, I love to cook, love to entertain. I also love traveling, on this website, you would find easy, simple but yet delicious recipes for your meals. My recipes are kids, family, and crowd-friendly.Cooking is not about sharing recipes, you need techniques and tips to make a good cook. I will be teaching/sharing some techniques you need in your kitchens that will help you to make delicious food you, and your family will enjoy, just stay glued!",
      ingredients:[
      "Shredded beef",
      "Spices"
    ],
      procedure: "Season shredded beef with a blend of spices. Sun-dry the beef to perfection, creating a flavorful and satisfying jerky. Serve as a delicious snack or accompaniment to main meals.",
      image: ['Dambu-Nama1','Dambu-Nama2','Dambu-Nama3']
    },
        
    {
      name: "Efo Egusi",
      time: 45,
      category: "yoruba",
      description: "Efo Egusi is a beloved Yoruba soup that showcases the richness of ground melon seeds and spinach. The egusi seeds are ground into a smooth paste and cooked with a variety of meats and vegetables, creating a thick and hearty soup. Efo Egusi is known for its creamy consistency and flavorful taste, often enjoyed with pounded yam, fufu, or rice. This Yoruba delicacy represents the culinary diversity and creativity of the Yoruba people, offering a satisfying and nutritious dining experience.",
      id: 22,
      author: 'Sisi Yemmie',
      author_description: "Sisi Yemmie creates and shares food recipe videos that are created as a result of experiments carried out in her kitchen on her YouTube channel, SisiYemmieTV. She also shares content on parenting, relationships and lifestyle. In 2018, she was profiled by CNN Africa alongside Linda Ikeji and Chiamaka Obuekwe as women who have struck social media gold.",
      ingredients: [
      "Ground melon seeds",
      "Spinach",
      "Assorted meats",
      "Vegetables"
    ],
      procedure: "Grind melon seeds into a smooth paste. Cook the paste with a variety of meats, vegetables, and spinach. Serve hot with pounded yam, fufu, or rice.",
      image: ['Efo-Elegusi1','Efo-Elegusi2', 'Efo-Elegusi3']
          
    },
        
     
  ] 
    

export default function recipes() {

  const data = recipesData.map(recipe => (
    <section key={recipe.id} style={{backgroundImage: `url(/images/${recipe.image[2]}.jpg`}} className='bg-cover rounded-lg'>
      <Link href={`/recipes/${recipe.name.split(' ').join('-')}`}>
    <p className='text-center text-white flex justify-end capitalize'>
      <span className='bg-[#2e2d2d9e] w-2/5 px-3 py-2 m-3 rounded-md '>
      {recipe.category}
      </span>
      </p>
    <section className={`h-[230px] shadow-lg hover:shadow-2xl flex flex-col items-start px-8 justify-end py-4 `} >

      
      <p className='font-semibold text-white flex items-center gap-2'>
      <IoMdTime />
      <span>
      {recipe.time < 60 ? recipe.time + 'mins' : `${parseInt((recipe.time/60))}hr ${recipe.time % 60}min`}
      </span>
      </p>
      <h2 className='text-white font-bold'>{recipe.name}</h2>
    </section>
      </Link>
    </section>
  ))
  
  return (
  <div className='grid grid-cols-[1fr_1fr_1fr] grid-rows-[repeat(8,300px)] gap-4 w-4/5 m-auto'>
    
    {data}
  </div>
  )
}
