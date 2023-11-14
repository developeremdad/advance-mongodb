db.data.aggregate([
    // stage-1
    {
        $unwind: "$interests"
    },
    {
        $group: { _id: "$interests", count: { $sum: 1 } }
    }
])