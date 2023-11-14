db.data.aggregate([
    // stage-1
    {
        $group: {
            _id: "$gender",
            count: { $sum: 1 },
            genderGroups: { $push: "$gender" }
        }
    }
])
