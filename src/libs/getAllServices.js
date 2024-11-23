import serviceImage1 from "@/assets/img/service/service__1.png";
import serviceImage2 from "@/assets/img/service/service__2.png";
import serviceImage3 from "@/assets/img/service/service__3.png";
import serviceImage4 from "@/assets/img/service/service__4.png";
import serviceImage6 from "@/assets/img/service/service__6.png";
import serviceImage7 from "@/assets/img/service/service__7.png";
import serviceImage8 from "@/assets/img/service/service__8.png";
import serviceImage9 from "@/assets/img/service/service__9.png";
import serviceImage10 from "@/assets/img/service/service__10.png";
import serviceImage11 from "@/assets/img/service/service__11.png";
import serviceImage12 from "@/assets/img/service/service__12.png";
import serviceImage13 from "@/assets/img/service/service__13.png";
import serviceImage14 from "@/assets/img/service/service__14.png";
import serviceImage15 from "@/assets/img/service/service__15.png";
import serviceImage16 from "@/assets/img/service/service__16.png";
import projectImage11 from "@/assets/img/project/project__11.png";
import projectImage12 from "@/assets/img/project/project__12.png";
import projectImage13 from "@/assets/img/project/project__13.png";
import projectImage14 from "@/assets/img/project/project__14.png";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import projectImage16 from "@/assets/img/project/project__16.png";
import projectImage17 from "@/assets/img/project/project__17.png";
import projectImage18 from "@/assets/img/project/project__18.png";
import projectImage19 from "@/assets/img/project/project__19.png";
import projectImage20 from "@/assets/img/project/project__20.png";
import projectImage21 from "@/assets/img/project/project__21.png";

const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "Channel 5 Tamil",
      desc: "Focus on Tamil culture, entertainment, and news.",
      detailsImg: projectImage17,
      img: projectImage17,
      category: "Strategic Planning",
      duration: "1500",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Debate | Relax Bro", url: "https://www.youtube.com/watch?v=tUWA3I1qy_g&list=PLeDoNtYNWprPBRdmbskm3ZyaElWjQ6jdR&ab_channel=Channel5Tamil" },
        { name: "Voices | Public Opinion, Press Meet", url: "https://www.youtube.com/watch?v=Rh5TAeZX51Y&list=PLeDoNtYNWprMNQ6Nf2QeTS6FxuwAFFEhZ&ab_channel=Channel5Tamil" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 2,
      title: "Channel 5 Telugu",
      desc: "Telugu-specific content, including cultural programs and discussions.",
      detailsImg: projectImage16,
      img: projectImage16,
      category: "Cost Reduction Analysis",
      duration: "1700",
      youtubeLinks: [
        { name: "Talk Show | చరిత తో కాసేపు", url: "https://www.youtube.com/watch?v=Adp8iI_6pc0&list=PLxsRr24gRm49VBDPwZu8l3cPsikS949jL&ab_channel=Channel5Telugu" },
        
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 3,
      title: "Channel 5 India",
      desc: "Broader topics like national news, current affairs, and Indian trends.",
      detailsImg: projectImage18,
      img: projectImage18,
      category: "Strategic Planning",
      duration: "1900",
      youtubeLinks: [
        { name: "Talk Show | Incredible Achievers", url: "https://www.youtube.com/watch?v=XaKXyh8TslI&list=PLi8J_PeF57l2qEiouc-ldXfm3Sa0_ghIs&ab_channel=Channel5India" },
        { name: "Opinion | Opinion Matters", url: "https://www.youtube.com/watch?v=LW5p7-uocjo&list=PLi8J_PeF57l2NfGaxXMVo997aYtt-Uvlc&ab_channel=Channel5India" },
        { name: "Guest Corner | Shekhar Iyer", url: "https://www.youtube.com/watch?v=PcjIcP94bgw&list=PLi8J_PeF57l20LwI7scyMFkryaD3DdRaz&ab_channel=Channel5India" },
        
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this      
    },
    {
      id: 4,
      title: "Channel 5 Bhakti",
      desc: "Spiritual and devotional content.",
      detailsImg: projectImage19,
      img: projectImage19,
      category: "Cost Reduction Analysis",
      duration: "2100",
      youtubeLinks: [
        { name: "Devotion | முக்தி தரும் பக்தி ", url: "https://www.youtube.com/watch?v=8e80upCxl3Q&list=PLVBqaXJqpiuj3rLFj_u8GhzSJ92T94--s&ab_channel=Channel5Bhakti" },
        { name: "Temples | Online Pilgrimage", url: "https://www.youtube.com/watch?v=qBV0iS719lA&list=PLVBqaXJqpiujEKIe5iEyuhZpgG4yYGZ9V&ab_channel=Channel5Bhakti" },
        { name: "Temples | Spiritual Journey", url: "https://www.youtube.com/watch?v=i4XEkvvGiZM&list=PLVBqaXJqpiuggDRv7RTPCKAPdt8tf3ntV&ab_channel=Channel5Bhakti" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 5,
      title: "Channel 5 Cinema",
      desc: "Cinema-centric updates, reviews, and trailers.",
      detailsImg: projectImage20,
      img: projectImage20,
      category: "Business Process",
      duration: "2400",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },

    {
      id: 6,
      title: "Channel 5 News",
      desc: "Breaking news and in-depth analysis.",
      detailsImg: projectImage21,
      img: projectImage21,
      category: "Supply Chain Optimization",
      duration: "2700",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },

    {
      id: 7,
      title: "Agency Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage14,
      img: serviceImage1,
      category: "Financial Restructuring",
      duration: "1500",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 8,
      title: "HR Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage13,
      img: serviceImage2,
      category: "Supply Chain Optimization",
      duration: "1700",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 9,
      title: "IT Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage12,
      img: serviceImage3,
      category: "Strategic Planning",
      duration: "1900",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 10,
      title: "Legal Consulting",
      desc: "Sagittis purus sit amet volutpat consequat mauris nunc congue nisi",
      detailsImg: projectImage11,
      img: serviceImage4,
      category: "Supply Chain Optimization",
      duration: "2100",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 11,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Market Entry Strategy",
      duration: "1500",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 12,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage7,
      category: "Strategic Planning",
      duration: "1900",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 13,
      title: "Legal Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage8,
      category: "Market Entry Strategy",
      duration: "2100",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },

    {
      id: 14,
      title: "Agency Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage13,
      category: "Business Process",
      duration: "1500",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 15,
      title: "HR Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage14,
      category: "Market Entry Strategy",
      duration: "1700",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 16,
      title: "IT Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage15,
      category: "Business Process",
      duration: "1900",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 17,
      title: "Legal Consulting",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage14,
      img: serviceImage16,
      category: "Financial Restructuring",
      duration: "2100",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 18,
      title: "STRATEGY PLANNING",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage13,
      img: serviceImage9,
      category: "Business Process",
      duration: "1500",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 19,
      title: "FINANCIAL ANALYSIS",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage12,
      img: serviceImage10,
      category: "Financial Restructuring",
      duration: "1700",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 20,
      title: "MARKET RESEARCH",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage11,
      img: serviceImage11,
      category: "Cost Reduction Analysis",
      duration: "1900",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
    {
      id: 21,
      title: "GROWTH STRATEGIES",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      detailsImg: projectImage15,
      img: serviceImage12,
      category: "Cost Reduction Analysis",
      duration: "2100",
      youtubeLinks: [
        { name: "Talk Show | Talk 2 Sridhar", url: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil" },
        { name: "Latest Tamil Entertainment News", url: "https://www.youtube.com/watch?v=example2" },
        { name: "Tamil Heritage Explained", url: "https://www.youtube.com/watch?v=example3" },
      ],
      youtubeLink: "https://www.youtube.com/watch?v=dHlHBWCyl24&list=PLeDoNtYNWprO5Qbf3TC2NgJJhkTyjSqnk&ab_channel=Channel5Tamil", // Add this
    },
  ];
  return services;
};

export default getAllServices;
