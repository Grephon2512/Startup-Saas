import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const playlist = defineType({

    name:"playlist",
    title:"Playlists",
    type:'document',
    icon: UserIcon,
    fields: [
        defineField({
            name:'title',
            type:'string'
        }),
        defineField({
            name:'slug',
            type:'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name:'author',
            type:'array',
            of:[{type: 'reference',to:[{ type: "startup"}]}],
        }),
       
    ],
   

})