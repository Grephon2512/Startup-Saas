import { UserIcon } from "lucide-react";
import { Rule } from "postcss";
import { defineField, defineType } from "sanity";

export const startup = defineType({

    name:"startup",
    title:"Startup",
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
            type:'reference',
            to:{type: 'author'}
        }),
        defineField({
            name:'views',
            type:'number'
        }),
        defineField({
            name:'description',
            type:'text'
        }),
        defineField({
            name:'category',
            type:'string',
            validation: (Rule) => Rule.min(1).max(20).required().error("Please Enter a Category"),
        }),
        defineField({
            name:'image',
            type:'url',
            validation: (Rule)=>Rule.required(),
        }),
        defineField({
            name:'pitch',
            type:'markdown'
        }),
    ],
    preview: {
        select:{
            title:'name'
        }
    }

})