db.data.aggregate([
    // stage-1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 60, 80],
            default: "others",
            output: {
                count: { $sum: 1 },
                documents: { $push: "$$ROOT" }
            }
        }
    },
    // stage-2
    {
        $sort: { count: 1 }
    },
    // stage-3p
    {
        $limit: 2
    },
    // stage-4
    {
        $project: {
            count: 1,
            documents: 1
        }
    }
])