import { PortableTextBlock, Slug } from "sanity"

export interface category  {
    name : String, 
    title : String, 
    description : String,
    _id : String, 
    _updatedAt :  Date, 
    _createdAt :  Date, 
    _rev : String, 
}

export interface ImageAsset {
    _type : string, 
    alt : string, 
    asset : {
        _ref : string, 
        _type : string, 
    }
}

export interface Post {
    author: any
    _type: 'post'
    _id: string
    _createdAt: string
    _updatedAt : string
    title?: string
    slug: Slug
    excerpt?: string
    mainImage?: ImageAsset
    sideImage1?: ImageAsset
    sideImage2?: ImageAsset
    sideImage3?: ImageAsset
    body: PortableTextBlock[]
    categories : category[]
    description  : string, 
    subdescription : string, 
    youtubeLink : string,
    minutesRead : string, 
}

export interface user {
    name : string, 
    email : string, 
    contact : string, 
}