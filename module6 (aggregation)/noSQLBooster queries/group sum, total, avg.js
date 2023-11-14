db.data.aggregate([
    // stage-1
    {
        $group: { _id: "null", totalSalary: { $sum: "$salary" } }
    }
])