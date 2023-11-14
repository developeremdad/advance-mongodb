db.getCollection("practice-orders").aggregate([
    {
        $lookup: {
            from: "data",
            localField: "userId",
            foreignField: "_id",
            as: "userInfo"
        }
    }
])