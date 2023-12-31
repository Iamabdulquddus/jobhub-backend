const Bookmark=require("../models/Bookmark")

module.exports = {
    createBookmark:async (req,res)=>{
        const newBook=new Bookmark(req.body);
        try {
            await newBook.save();
            // const {__v,createdAt,updatedAt,...newJobInfo}=savedJob._doc;
            res.status(201).json("BookMark Successfully Created");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteBookmark:async (req,res)=>{
        try {
            await Bookmark.findOneAndDelete(req.params.id);// const {__v,createdAt,updatedAt,...newJobInfo}=savedJob._doc;
            res.status(200).json("BookMark Successfully Deleted");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getBookmarks:async (req,res)=>{
        try {
            const bookmarks=await Bookmark.find({userId:req.params.userId});
            res.status(200).json(bookmarks);
        } catch (error) {
            res.status(500).json(error);
        }
    },


}