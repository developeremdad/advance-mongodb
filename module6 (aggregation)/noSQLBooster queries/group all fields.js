db.data.aggregate([
    // stage-1
    {
        $group: {
            _id: "$gender",
            count: { $sum: 1 },
            fullDocs: { $push: "$$ROOT" }
        }
    },
    // stage-2
    {
        $project: {
            "fullDocs.gender": 1,
            "fullDocs.phone": 1
        }
    }
])