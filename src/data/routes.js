export const routes = [
  {
    slug: "nandi-hills",
    name: "Nandi Hills – Isha",
    days: "1 Day",
    km: "60 km",
    tag: "Weekend",
    place: "Nandi Hills",
    summary: "Nandi Hills, also known as Nandidurg or Nandi Betta: where tranquility meets the sky.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Nandi Hills", km: "60 km" },
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise at Nandi Hills",
        desc: "Early morning pickup from Bengaluru (around 4:30 AM) and drive up to Nandi Hills to catch the sunrise over the Nandi Betta range. Time to explore Tipu's Drop, the fort walls, and the temple, followed by breakfast on the way back. Drop back in Bengaluru by early afternoon.",
      },
    ],
  },
  {
    slug: "mysuru-coorg",
    name: "Mysuru – Coorg",
    days: "5D / 4N",
    km: "252 km",
    tag: "Hills",
    place: "Coorg",
    summary: "Rich cultural heritage in Mysuru meets the serene beauty of nature in Coorg.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysuru", km: "145 km" },
      { name: "Coorg", km: "252 km" },
    ],
    itinerary: [
      { day: 1, title: "Bengaluru to Mysuru", desc: "Pickup from Bengaluru and drive to Mysuru. Visit Mysore Palace, Chamundi Hill, and the Big Bull en route. Evening at Brindavan Gardens. Overnight stay at Mysuru." , places: ["Mysore Palace","Chamundi Hill","Big Bull" ,"Ooty Botanical Garden"]},
      { day: 2, title: "Mysuru Sightseeing", desc: "After breakfast, cover Mysuru's other landmarks — St. Philomena's Church, Jaganmohan Palace, and the local market. Overnight stay at Mysuru." ,  places: ["St Philomena Church","Jaganmohan Palace","Mysore Local Market"] },
      { day: 3, title: "Mysuru to Coorg", desc: "Checkout and proceed to Coorg (Madikeri). En route stop at Dubare Elephant Camp. On arrival, check into a hotel and relax amid the coffee plantations. Overnight stay at Coorg." , places: ["Dubare Elephant Camp","Elephant Sighting","Tea Plantation"]},
      { day: 4, title: "Coorg Sightseeing", desc: "Full day covering Abbey Falls, Raja's Seat, Namdroling Monastery, and a coffee estate walk. Overnight stay at Coorg." , places: ["Abbey Falls","Raja Seat","Namdroling Monastery","Coffee Estate"] },
      { day: 5, title: "Departure", desc: "After breakfast, checkout and proceed to Bengaluru to board your train or flight." },
    ],
  },
  {
    slug: "bangalore-mysore-ooty",
    name: "Bengaluru – Mysore – Ooty",
    days: "5D / 4N",
    km: "290 km",
    tag: "Hills",
    place: "Ooty",
    summary: "Picturesque landscapes, pleasant climate, and colonial heritage in the Nilgiris.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysuru", km: "145 km" },
      { name: "Ooty", km: "290 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Ooty",
        desc: "Ooty, or Udhagamandalam, is a picturesque hill station in Tamil Nadu, India, nestled in the Nilgiri Hills. It's celebrated for its verdant tea plantations, scenic beauty, and temperate climate. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a captivating journey through the mountains. Ooty Botanical Gardens exhibit a diverse array of exotic flora, while Ooty Lake provides boating opportunities. The town is famed for its homemade chocolates and tea production. Sim's Park, Rose Garden, and Doddabetta Peak are other popular attractions, making Ooty a beloved destination for nature lovers and those seeking a tranquil escape.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bengaluru", desc: "Pickup from arrival. Transfer to a hotel, after lunch visit Lalbagh, Vidhana Soudha, Museum and ISKCON temple. Overnight stay at Bengaluru.", places: ["Lalbagh", "Lalbagh Flower Show","Vidhana Soudha", "Iskon Temple"] },
      { day: 2, title: "Bengaluru to Mysuru", desc: "After breakfast proceed to Mysuru. En route visit Srirangapatna (Daria Daulat Bagh, Gumbaz, Tippu Fort and Temple). On arrival check in to hotel. Evening proceed to Brindavan Garden. Overnight stay at Mysuru.", places: ["Daria Daulat Bagh","Gumbaz", "Tippu Fort","Ranganathaswamy Temple", "Brindavan Garden"] },
      { day: 3, title: "Mysuru to Ooty", desc: "After breakfast checkout and proceed to visit Chamundi Hill and the Big Bull. Afternoon proceed to Ooty. On arrival in Ooty, check in to a hotel. Evening visit Botanical Gardens. Overnight stay at Ooty.", places: ["Chamundi Hill","Big Bull" ,"Ooty Botanical Garden"] },
      { day: 4, title: "Coonoor Sightseeing", desc: "After breakfast proceed to Coonoor. Coonoor sightseeing (Sim's Park, Lamb's Rock, Dolphin's Nose, Tea Factory and Tea Gardens) and Doddabetta Peak. Overnight stay at Ooty.", places: ["Sims Park", "Dolphins Nose", "Tea Factory","Tea Estate" ,"Doddabetta Peak"] },
      { day: 5, title: "Departure", desc: "After breakfast checkout and proceed to Bengaluru or Coimbatore to board your train or flight." },
    ],
  },
  {
    slug: "bangalore-mysore-wayanad",
    name: "Bengaluru – Mysore – Wayanad",
    days: "5D / 4N",
    km: "270 km",
    tag: "Wildlife",
    place: "Wayanad",
    summary: "Lush greenery, picturesque landscapes, and vibrant wildlife in Kerala.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysuru", km: "145 km" },
      { name: "Wayanad", km: "270 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Wayanad",
        desc: "Wayanad is a picturesque district in the Indian state of Kerala, known for its lush green landscapes, rolling hills, dense forests, and a rich cultural heritage. Nestled in the Western Ghats, it offers a perfect blend of nature and culture. The district boasts pristine wildlife sanctuaries like the Wayanad Wildlife Sanctuary, home to elephants, tigers, and a variety of wildlife. The Edakkal Caves, with their ancient petroglyphs, provide an intriguing glimpse into prehistoric times. Chembra Peak, the highest point in Wayanad, offers trekking opportunities with breathtaking panoramic views. The serene Pookode Lake, Banasura Sagar Dam, and the captivating Soochipara Falls are among the district's natural attractions. Wayanad is a haven for nature enthusiasts, history buffs, and those seeking an offbeat Kerala experience.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bangalore", desc: "Pickup from arrival. Transfer to a hotel, after lunch visit Lalbagh, Vidhana Soudha, Museum and ISKCON temple. Overnight stay at Bangalore." , places: ["Lalbagh", "Lalbagh Flower Show","Vidhana Soudha","Museum" ,"Iskon Temple"]},
      { day: 2, title: "Bangalore to Mysore", desc: "Morning checkout and proceed to Mysore. En route visit Srirangapatna (Dariya Daulat Bagh, Gumbaz, Fort and Temple). On arrival check in to hotel. After freshening up, proceed to visit Maharaja's Palace and Brindavan Garden. Overnight stay at Mysore." , places: ["Daria Daulat Bagh","Gumbaz", "Tippu Fort","Ranganathaswamy Temple","Mysore Palace" ,"Brindavan Garden"] },
      { day: 3, title: "Mysore to Wayanad", desc: "After breakfast, proceed to Pookode Lake, Kanthanpara Falls, and Kuruva Island. Overnight stay at Wayanad." , places: ["Pookode-Lake","Khantanpara-Falls", "Kuruva Island"] },
      { day: 4, title: "Coonoor Sightseeing", desc: "After breakfast proceed to Coonoor. Coonoor sightseeing (Sim's Park, Lamb's Rock, Dolphin's Nose, Tea Factory and Tea Gardens) and Doddabetta Peak. Overnight stay at Ooty.", places: ["Sims Park", "Dolphins Nose", "Tea Factory","Tea Estate" , "Lambs Rock","Doddabetta Peak"] },
      { day: 5, title: "Departure", desc: "After breakfast checkout and proceed to Calicut, Bangalore, or Mysore to board your train or flight." },
    ],
  },
  {
    slug: "mysore-ooty-kodaikanal",
    name: "Mysore – Ooty – Kodaikanal",
    days: "5D / 4N",
    km: "420 km",
    tag: "Hills",
    place: "Kodaikanal",
    summary: "Explore some of the most beautiful hill stations in South India.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysuru", km: "145 km" },
      { name: "Ooty", km: "290 km" },
      { name: "Kodaikanal", km: "420 km" },
    ],
    overview: [
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Ooty",
        desc: "Ooty, or Udhagamandalam, is a picturesque hill station in Tamil Nadu, India, nestled in the Nilgiri Hills. It's celebrated for its verdant tea plantations, scenic beauty, and temperate climate. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a captivating journey through the mountains. Ooty Botanical Gardens exhibit a diverse array of exotic flora, while Ooty Lake provides boating opportunities. The town is famed for its homemade chocolates and tea production. Sim's Park, Rose Garden, and Doddabetta Peak are other popular attractions, making Ooty a beloved destination for nature lovers and those seeking a tranquil escape.",
      },
      {
        place: "Kodaikanal",
        desc: "Kodaikanal, often referred to as the \"Princess of Hill Stations,\" is a charming hill station in the Indian state of Tamil Nadu. Nestled in the Palani Hills, it offers a refreshing escape from the hustle and bustle of city life. The town is known for its serene lakes, lush forests, and cool climate, making it a popular summer retreat. Kodaikanal Lake, surrounded by scenic views, is perfect for boating. The region is replete with trekking trails, including the picturesque Coaker's Walk and the serene Bryant Park. The town also hosts various cultural events and has a vibrant local market. With its natural beauty and pleasant weather, Kodaikanal is a delightful destination for nature lovers and holidaymakers.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Mysore", desc: "Pickup from arrival and proceed to Mysore. En route visit Srirangapatna (Dariya Daulat Bagh, Gumbaz, Tippu Fort and Temple). On arrival check in to hotel. After freshening up proceed to Maharaja's Palace and Brindavan Garden. Overnight stay at Mysore.",places: ["Daria Daulat Bagh","Gumbaz", "Tippu Fort","Ranganathaswamy Temple","Mysore Palace" ,"Brindavan Garden"] },
      { day: 2, title: "Mysore to Ooty", desc: "After breakfast check out and proceed to Chamundi Hill and Big Bull. Afternoon proceed to visit Ooty Lake and Botanical Garden. Overnight stay at Ooty.", places: ["Mysore Palace","Chamundi Hill","Big Bull" ,"Ooty Lake","Ooty Botanical Garden"] },
      { day: 3, title: "Ooty Sightseeing", desc: "After breakfast, check out and proceed to Ooty. On arrival, check in to the hotel. By evening we will visit Ooty Lake and Botanical Garden. Overnight stay at Ooty.",places:["Ooty Lake","Ooty Botanical Garden"] },
      { day: 4, title: "Ooty to Kodaikanal", desc: "After morning breakfast checkout and proceed to Kodaikanal. Check in to hotel on arrival. Evening visit to Coaker's Walk, Green Valley View, and the Lake. Overnight stay at Kodaikanal.",places:["Coakers Walk","Ooty Botanical Garden","Green Valley View","Lake"] },
      { day: 5, title: "Departure", desc: "After morning breakfast checkout and proceed to Bangalore, Mysore, or Coimbatore to board your train or flight." },
    ],
  },
   {
    slug: "bangalore-tirupathi-mysore-ooty",
    name: "Bengaluru – Tirupathi – Mysore – Ooty",
    days: "8D / 7N",
    km: "550 km",
    tag: "Pilgrimage",
    place: "Tirupati",
    summary: "Tirupati, a renowned pilgrimage city in Andhra Pradesh's Chittoor district.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Tirupathi", km: "260 km" },
      { name: "Mysuru", km: "400 km" },
      { name: "Ooty", km: "550 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Tirupathi",
        desc: "Tirupati, located in the Indian state of Andhra Pradesh, is a sacred city famous for the renowned Sri Venkateswara Temple, one of the wealthiest and most visited Hindu pilgrimage sites in the world. Devotees from all corners of India and beyond flock to the temple to seek the blessings of Lord Venkateswara, an incarnation of Lord Vishnu. The city is perched in the lush Eastern Ghats and offers a blend of spirituality and natural beauty. Beyond the temple, visitors can explore the Chandragiri and Tirumala Forts, take in scenic hill views, and savor traditional South Indian cuisine.",
      },
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Ooty",
        desc: "Ooty, or Udhagamandalam, is a picturesque hill station in Tamil Nadu, India, nestled in the Nilgiri Hills. It's celebrated for its verdant tea plantations, scenic beauty, and temperate climate. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a captivating journey through the mountains. Ooty Botanical Gardens exhibit a diverse array of exotic flora, while Ooty Lake provides boating opportunities. The town is famed for its homemade chocolates and tea production. Sim's Park, Rose Garden, and Doddabetta Peak are other popular attractions, making Ooty a beloved destination for nature lovers and those seeking a tranquil escape.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bangalore", desc: "Pickup from arrival at Bangalore. Transfer to a hotel, after lunch visit Lalbagh, Vidhana Soudha, Museum and ISKCON temple. Overnight stay at Bangalore.", places: ["Lalbagh", "Lalbagh Flower Show","Vidhana Soudha","Museum" ,"Iskon Temple"] },
      { day: 2, title: "Bangalore to Tirupati", desc: "After breakfast check out and proceed to Tirupati. On arrival check in to hotel. Proceed to Lord Balaji darshan and overnight stay at Tirupati.",places:["Balaji Temple","Dharshan"] },
      { day: 3, title: "Tirupati to Bangalore", desc: "After breakfast check out and proceed to Bangalore. En route visit Kanchi, Kalahasti and Papanashini. On arrival check in to hotel. Overnight stay at Bangalore.",places:["Kanchi Temple","Kalahasti Temple","Papanashini Temple"] },
      { day: 4, title: "Bangalore to Mysore", desc: "After breakfast proceed to Mysore. En route visit Srirangapatna (Dariya Daulat Bagh, Gumbaz, Tippu Fort and Temple). On arrival check in to hotel. Evening proceed to Brindavan Garden. Overnight stay at Mysore." ,places: ["Daria Daulat Bagh","Gumbaz", "Tippu Fort","Ranganathaswamy Temple", "Brindavan Garden"]},
      { day: 5, title: "Mysore Sightseeing", desc: "After breakfast, visit Maharaja's Palace, Chamundi Hill, Big Bull, St. Philomena's Church, Jagan Mohan Palace (Art Gallery), and the Zoo. Overnight stay at Mysore.", places: ["St Philomena Church","Jaganmohan Palace","Mysore Zoo"] },
      { day: 6, title: "Mysore to Ooty", desc: "After breakfast checkout and proceed to Ooty. On arrival in Ooty, check in to a hotel. After lunch, visit Ooty Lake and Botanical Gardens. Overnight stay at Ooty.",places:["Ooty Lake","Ooty Botanical Garden"] },
      { day: 7, title: "Coonoor Sightseeing", desc: "After breakfast proceed to Coonoor. Coonoor sightseeing (Sim's Park, Lamb's Rock, Dolphin's Nose, Tea Factory and Tea Gardens) and Doddabetta Peak. Overnight stay at Ooty.", places: ["Sims Park", "Dolphins Nose", "Tea Factory","Tea Estate" , "Lambs Rock","Doddabetta Peak"]  },
      { day: 8, title: "Departure", desc: "After breakfast checkout and proceed to Bangalore or Coimbatore to board your train or flight." },
    ],
  },
  {
    slug: "bangalore-shirdi",
    name: "Bengaluru – Shirdi",
    days: "Custom",
    km: "700 km",
    tag: "Pilgrimage",
    place: "Shirdi",
    summary: "Shirdi Sai Baba Temple — a revered pilgrimage site for devotees.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Shirdi", km: "700 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Shirdi Sai Baba Temple",
        desc: "Shirdi Sai Baba Temple, located in the town of Shirdi in Maharashtra, India, is a spiritual haven and one of the most revered pilgrimage sites. Dedicated to the 19th-century saint, Sai Baba, the temple attracts millions of devotees seeking solace and blessings. The Samadhi Mandir houses the sacred tomb of Sai Baba, and the atmosphere within is imbued with deep devotion. Pilgrims participate in various rituals, aartis, and prayers held throughout the day, with special reverence for the Kakad Aarti and Shej Aarti. Dwarkamai, where Sai Baba spent a significant part of his life, and Chavadi are integral parts of the temple complex, enhancing the spiritual experience. The temple celebrates festivals like Ram Navami and Guru Purnima with grandeur. Shirdi Sai Baba Temple stands as a symbol of universal love, compassion, and the enduring legacy of a saint who transcends religious boundaries.",
      },
    ],
    itinerary: [
      { day: 1, title: "Departure from Bengaluru", desc: "Overnight drive from Bengaluru towards Shirdi." },
      { day: 2, title: "Arrival & Darshan", desc: "Arrive in Shirdi, check into hotel, and proceed for Sai Baba temple darshan. Overnight stay at Shirdi.",places:["Shirdi Temple","Sai Baba Statue","Sai-Baba-Darshan"]  },
      { day: 3, title: "Shirdi to Bengaluru", desc: "Morning darshan followed by checkout and the return drive to Bengaluru." },
    ],
  },
  {
    slug: "bangalore-mantralaya",
    name: "Bengaluru – Mantralaya",
    days: "2D / 1N",
    km: "380 km",
    tag: "Pilgrimage",
    place: "Mantralaya",
    summary: "Home to the Raghavendra Swamy Temple, dedicated to the saint Raghavendra Swami.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mantralaya", km: "380 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Mantralaya",
        desc: "Mantralaya is home to the renowned Raghavendra Swamy Temple, a sacred pilgrimage site in the Kurnool district of Andhra Pradesh, India. Dedicated to the 17th-century saint Raghavendra Swami, the temple exudes a tranquil and spiritual atmosphere. Devotees flock to seek blessings and witness the Samadhi (final resting place) of the revered saint. The temple's architecture reflects a harmonious blend of Dravidian and Vijayanagara styles, showcasing intricate carvings and sacred motifs. Rituals and prayers, including ardent chanting of hymns, create an ambiance of devotion. Mantralaya stands as a symbol of religious significance, drawing pilgrims seeking solace and divine intervention. The town's vibrant spiritual energy, coupled with the Tungabhadra River's serene backdrop, makes Mantralaya a cherished destination for those on a spiritual quest.",
      },
    ],
    itinerary: [
      { day: 1, title: "Bengaluru to Mantralaya", desc: "Pickup from Bengaluru and drive to Mantralaya. Visit the Raghavendra Swamy Temple for darshan. Overnight stay at Mantralaya.",places:["Mantralayam Temple","Raghavendraswamy Darshan"]  },
      { day: 2, title: "Departure", desc: "Morning darshan followed by checkout and the return drive to Bengaluru." },
    ],
  },
  {
    slug: "bangalore-mysore-ooty-munnar-thekady-alleppey",
    name: "Bangalore-Mysore-Ooty-Munnar-Thekkady-Alleppey",
    days: "10D / 9N",
    km: "550 km",
    tag: "Hills",
    place: "alleppey",
    summary: "Ooty and Kodaikanal allows you to explore some of the most beautiful hill stations.",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysore", km: "260 km" },
      { name: "Ooty", km: "400 km" },
      { name: "Munnar", km: "550 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Ooty",
        desc: "Ooty, or Udhagamandalam, is a picturesque hill station in Tamil Nadu, India, nestled in the Nilgiri Hills. It's celebrated for its verdant tea plantations, scenic beauty, and temperate climate. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a captivating journey through the mountains. Ooty Botanical Gardens exhibit a diverse array of exotic flora, while Ooty Lake provides boating opportunities. The town is famed for its homemade chocolates and tea production. Sim's Park, Rose Garden, and Doddabetta Peak are other popular attractions, making Ooty a beloved destination for nature lovers and those seeking a tranquil escape.",
      },
      {
        place: "Munnar",
        desc: "Munnar, a captivating hill station in the Indian state of Kerala, is renowned for its scenic beauty and lush tea plantations. Nestled in the Western Ghats, it offers a cool and refreshing climate, making it a favored destination for nature lovers and those seeking tranquility. The region's undulating hills, misty valleys, and pristine forests create a breathtaking landscape. Munnar's tea gardens provide an opportunity to explore the tea-making process, and the Eravikulam National Park is home to the endangered Nilgiri Tahr. Waterfalls like Attukal and Lakkam, along with the Mattupetty Dam and Anamudi Peak, add to the natural allure of Munnar, making it a paradise for trekkers and wildlife enthusiasts.",
      },
      {
        place: "Thekkady",
        desc: "Thekkady is a captivating destination situated in the Periyar National Park in the Indian state of Kerala. Known for its lush forests, serene lakes, and abundant wildlife, it offers a unique blend of natural beauty and wildlife conservation. The centerpiece of Thekkady is the Periyar Lake, where boat safaris provide a chance to witness elephants, tigers, and various other wildlife in their natural habitat. The Periyar Tiger Reserve is an important conservation area. Thekkady's spice plantations, elephant rides, and opportunities for bamboo rafting add to its charm. This region is a haven for nature enthusiasts and those seeking a closer connection with the wild beauty of Kerala.",
      },
      {
        place: "Alleppey",
        desc: "Alleppey, also known as Alappuzha, is a picturesque coastal town in the Indian state of Kerala, often referred to as the \"Venice of the East.\" It is celebrated for its intricate network of backwaters, serene lagoons, and pristine beaches. The highlight of Alleppey is the backwater cruises on traditional houseboats, allowing visitors to immerse themselves in the natural beauty of the region. The town is also famous for the annual Nehru Trophy Boat Race, a thrilling event showcasing traditional snake boat racing. Alleppey's historic lighthouse, sandy beaches, and lush paddy fields further enhance its allure, making it a favored destination for nature lovers and those seeking a tranquil backwater experience.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bangalore", desc: "Pickup from arrival. Transfer to a hotel, after lunch visit Lalbagh, Vidhana Soudha, Museum and ISKCON temple. Overnight stay at Bangalore.", places: ["Lalbagh", "Lalbagh Flower Show","Vidhana Soudha","Museum" ,"Iskon Temple"] },
      { day: 2, title: "Bangalore to Mysore", desc: "After breakfast proceed to Mysore. En route visit Srirangapatna (Dariya Daulat Bagh, Gumbaz, Tippu Fort and Temple). On arrival check in to hotel. Evening proceed to Brindavan Garden. Overnight stay at Mysore.",places: ["Daria Daulat Bagh","Gumbaz", "Tippu Fort","Ranganathaswamy Temple" ,"Brindavan Garden"] },
      { day: 3, title: "Mysore Sightseeing", desc: "After breakfast, visit Maharaja's Palace, Chamundi Hill, Big Bull, St. Philomena's Church, Jagan Mohan Palace (Art Gallery), and the Zoo. Overnight stay at Mysore.", places: ["Mysore Palace","Chamundi Hill","Big Bull" ,"Ooty Botanical Garden","St Philomena Church","Jaganmohan Palace","Mysore Local Market"] },
      { day: 4, title: "Mysore to Ooty", desc: "After breakfast checkout and proceed to Ooty, on arrival in Ooty check in to a hotel. After lunch, visit Ooty Lake and Botanical Gardens. Overnight stay at Ooty.",places:["Ooty Lake","Ooty Botanical Garden"] },
      { day: 5, title: "Coonoor Sightseeing", desc: "After breakfast proceed to Coonoor. Coonoor sightseeing (Sim's Park, Lamb's Rock, Dolphin's Nose, Tea Garden and Tea Factory) and Doddabetta. Overnight stay at Ooty.",places: ["Sims Park", "Lambs Rock","Dolphins Nose", "Tea Factory","Tea Estate" ,"Doddabetta Peak"] },
      { day: 6, title: "Ooty to Munnar", desc: "After breakfast start from Ooty and reach Munnar by afternoon. On arrival check in to hotel. After lunch proceed to visit Cheeyappara Waterfalls, Valara Waterfalls, Attukad Waterfalls, and spice plantations. Overnight stay at Munnar.",places:["cheeyappara falls","Valara Falls","Attukad Waterfall","Spice Garden"] },
      { day: 7, title: "Munnar Sightseeing", desc: "Sightseeing destinations in Munnar include Eravikulam National Park (Rajamala), Neelakurinji viewpoint (mountain goats), Mattupetty Dam, tea estates, Echo Point, Kundale Dam, Top Station, and Lake (optional). Overnight stay at Munnar.",places:["Eravikulam National Park","Animal","Neelakurinji Viewpoint","Mattupetty Dam","Munnar Tea Estate","Echo-Point","Kundala Dam","Top Station","Munnar Lake"] },
      { day: 8, title: "Munnar to Thekkady", desc: "After breakfast check out and proceed to Thekkady. On arrival check in to hotel. After freshening up, proceed to visit sightseeing destinations in Thekkady, including the famous Periyar Wildlife Sanctuary, Mullaperiyar Dam, and exotic spice plantations. Overnight stay at Thekkady.",places:["Periyar Wildlife Sanchury","National Park","Mullaperiyar Dam","Spice Garden"] },
      { day: 9, title: "Thekkady to Alleppey", desc: "After breakfast check out and proceed to Alleppey. On arrival check in to a houseboat at Alleppey. Enjoy the backwaters, scenery, and different places for 21 hours in Kerala-style houseboats from 12 noon. Onboard you'll be greeted with a welcome drink, tea, snacks, mineral water, lunch, dinner, and breakfast.",places:["Alleppey","Houseboat"] },
      { day: 10, title: "Departure", desc: "After breakfast check out and proceed to Cochin or Trivandrum to board your train or flight." },
    ],
  },
 

   {
    slug: "bangalore-mysore-ooty-kodaikannal-madhurai-rameshwaram,kanyakumari",
    name: "Bangalore-Mysore-Ooty-Kodaikanal-Madurai-Rameshwaram-Kanyakumari",
    days: "10D / 9N",
    km: "550 km",
    tag: "Pilgrimage",
    place: "kanyakumari",
    summary: "Rameshwaram and Kanyakumari are two prominent tourist destinations located in the southernmost part of India",
    stops: [
      { name: "Bengaluru", km: "0 km" },
      { name: "Mysore", km: "260 km" },
      { name: "Ooty", km: "400 km" },
      { name: "Kodaikannal", km: "550 km" },
      { name: "Madhurai", km: "550 km" },
      { name: "Rameshwaram", km: "550 km" },
      { name: "Kanyakumari", km: "550 km" },
    ],
    overview: [
      {
        place: "Bangalore",
        desc: "Bangalore, officially known as Bengaluru, is India's leading technology and startup hub, earning its moniker as the \"Silicon Valley of India.\" The city teems with IT companies, software services, and innovation. It also boasts a vibrant cultural scene with music, dance, and art. Educational excellence is upheld by institutions like IISc and IIT. Bangalore's lush parks, such as Cubbon Park and Lalbagh, offer a natural retreat. The city's diverse culinary landscape ranges from South Indian classics like masala dosa to global cuisines. While traffic congestion is a challenge, Bangalore's moderate climate and cosmopolitan charm make it a captivating metropolis.",
      },
      {
        place: "Mysore",
        desc: "Mysore, often referred to as the \"City of Palaces,\" is a captivating destination in the southern part of India. With its rich history, architectural wonders, and vibrant culture, Mysore offers a memorable travel experience. Mysuru is famous for its grand Dasara festival, which is a ten-day celebration featuring a procession of beautifully adorned elephants, cultural performances, and a grand finale with a torchlight parade. It is one of the most significant festivals in Karnataka.",
      },
      {
        place: "Ooty",
        desc: "Ooty, or Udhagamandalam, is a picturesque hill station in Tamil Nadu, India, nestled in the Nilgiri Hills. It's celebrated for its verdant tea plantations, scenic beauty, and temperate climate. The Nilgiri Mountain Railway, a UNESCO World Heritage Site, offers a captivating journey through the mountains. Ooty Botanical Gardens exhibit a diverse array of exotic flora, while Ooty Lake provides boating opportunities. The town is famed for its homemade chocolates and tea production. Sim's Park, Rose Garden, and Doddabetta Peak are other popular attractions, making Ooty a beloved destination for nature lovers and those seeking a tranquil escape.",
      },
      {
        place: "Kodaikanal",
        desc: "Kodaikanal, often referred to as the \"Princess of Hill Stations,\" is a charming hill station in the Indian state of Tamil Nadu. Nestled in the Palani Hills, it offers a refreshing escape from the hustle and bustle of city life. The town is known for its serene lakes, lush forests, and cool climate, making it a popular summer retreat.",
      },
      {
        place: "Madurai",
        desc: "Madurai, located in the southern Indian state of Tamil Nadu, is a city steeped in history, culture, and spirituality. It is most renowned for the Meenakshi Amman Temple, a magnificent Dravidian-style temple dedicated to the goddess Meenakshi. The city's bustling streets, vibrant markets, and traditional music and dance performances make it a cultural hub. The historic Thirumalai Nayak Palace, with its grand architecture, is another notable attraction. Madurai's rich culinary heritage, with its unique South Indian flavors, adds to its charm. The city's strong connection to Tamil literature and classical traditions has earned it the title \"Athens of the East.\"",
      },
      {
        place: "Rameshwaram",
        desc: "Rameswaram, a sacred town located in the Indian state of Tamil Nadu, holds immense religious significance for Hindus. It is situated on Pamban Island and is known for the Ramanathaswamy Temple, one of the twelve Jyotirlingas and a prominent pilgrimage site. The temple's magnificent architecture, long corridors, and sacred tanks draw devotees from all over India. Rameswaram is also famous for its breathtaking beaches, such as Agnitheertham and Dhanushkodi, which offer stunning views of the Bay of Bengal. The town's historical connection to the epic Ramayana adds to its spiritual aura, making it a cherished destination for pilgrims and tourists alike.",
      },
      {
        place: "Kanyakumari",
        desc: "Kanyakumari, located at the southernmost tip of the Indian subcontinent, is a captivating coastal town in the Indian state of Tamil Nadu. Known for its breathtaking confluence of the Arabian Sea, the Bay of Bengal, and the Indian Ocean, it offers stunning sunrise and sunset views. The town is steeped in history and spirituality, with the Vivekananda Rock Memorial and Thiruvalluvar Statue standing as iconic landmarks. Kanyakumari is a significant pilgrimage site, and the Kumari Amman Temple, dedicated to the goddess Devi Kanya Kumari, draws devotees. Its serene beaches, historical sites, and cultural richness make Kanyakumari a unique and mesmerizing destination.",
      },
    ],
    itinerary: [
      { day: 1, title: "Arrival in Bangalore", desc: "Pickup from Bangalore, transfer to hotel. After freshening up and breakfast, proceed to visit Lal Bagh, Vidhana Soudha, Museum, Tippu Palace, and ISKCON Temple. Overnight stay at Bangalore." ,places: ["Lalbagh", "Lalbagh Flower Show","Vidhana Soudha","Museum" ,"Iskon Temple"]},
      { day: 2, title: "Bangalore to Mysore", desc: "After breakfast proceed to Mysore. En route visit Srirangapatna. On arrival check in to hotel. After lunch proceed to visit Mysore Palace, St. Philomena's Church, and Brindavan Garden. Overnight stay at Mysore.",places: ["Mysore Palace","St Philomena Church","Brindavan Garden"] },
      { day: 3, title: "Mysore to Ooty", desc: "After breakfast check out and proceed to Ooty via Bandipur and Mudumalai National Park. On arrival check in to hotel. Evening proceed to visit Ooty Lake and Botanical Garden. Overnight stay at Ooty.",places:["Bandipur National Park","Madhumalai National Park","Ooty Lake","Ooty Botanical Garden"] },
      { day: 4, title: "Ooty & Coonoor Sightseeing", desc: "After breakfast proceed to visit Doddabetta Peak and Coonoor sightseeing (Sim's Park, Lamb's Rock, Tea Factory, and Dolphin's Nose). Overnight stay at Ooty.",places: ["Sims Park", "Lambs Rock","Dolphins Nose", "Tea Factory","Tea Estate" ,"Doddabetta Peak"] },
      { day: 5, title: "Ooty to Kodaikanal", desc: "After breakfast check out and proceed to Kodaikanal. On arrival check in to hotel. Overnight stay at Kodaikanal." },
      { day: 6, title: "Kodaikanal Sightseeing", desc: "After breakfast proceed to visit Silent Valley View, Bear Shola Falls, Silver Cascade Falls, and the Lake. Overnight stay at Kodaikanal.",places: ["Silent Valley View", "Bear Shola Falls","Silver Cascade Falls", "Lake"] },
      { day: 7, title: "Kodaikanal to Madurai", desc: "After breakfast check out and proceed to Madurai. On arrival check in to hotel. Evening proceed to visit Meenakshi Amman Temple. Overnight stay at Madurai.",places: ["Meenakshi Amman Temple","Temple Sculpture"]  },
      { day: 8, title: "Madurai to Rameshwaram", desc: "After breakfast check out and proceed to Rameshwaram. On arrival check in to hotel. Proceed to Rameshwaram sightseeing. Overnight stay at Rameshwaram.",places: ["Rameshwaram Temple","Railway Track"] },
      { day: 9, title: "Rameshwaram to Kanyakumari", desc: "After breakfast check out and proceed to Kanyakumari. On arrival check in to hotel. Evening proceed to see the sunset point. Overnight stay at Kanyakumari.",places: ["Kanyakumari","Beautiful Sunset"] },
      { day: 10, title: "Departure", desc: "Early morning proceed to see the sunrise. After breakfast proceed to visit Vivekananda Memorial. After lunch, checkout and proceed to Kanyakumari, Trivandrum, or Madurai railway station/airport to board your train or flight." },
    ],
  },
];