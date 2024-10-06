// will create a array of nav-links and then we will extract the array from here to Navbar Component, in future also if you want to change the navbar then simply come here and change the particular data.

export const MenuItems=[
    {
        id:"flights",
        title:"Flights",
        url:"/flights",
        cName:"nav-links",
        icon:"bx bxs-plane-alt"
    },
    {
        id:"hotels",
        title:"Hotels",
        url:"/hotels",
        cName:"nav-links",
        icon:"fa-solid fa-hotel"
    },{
        id:"homestays",
        title:"HomeStays",
        url:"/homestaysandvillas",
        cName:"nav-links",
        icon:"bx bxs-home"
    },
    {
        id:"holidays",
        title:"Holidays",
        url:"/holidays",
        cName:"nav-links",
        icon:"fas fa-gifts"
    },
    {
        id:"trains",
        title:"Trains",
        url:"/trains",
        cName:"nav-links",
        icon:"fa-solid fa-train"
    },
    {
        id:"buses",
        title:"Buses",
        url:"/buses",
        cName:"nav-links",
        icon:"fa-solid fa-bus"
    },
    {
        id:"cabs",
        title:"Cabs",
        url:"/cabs",
        cName:"nav-links",
        icon:"fa-solid fa-taxi"
    }
]