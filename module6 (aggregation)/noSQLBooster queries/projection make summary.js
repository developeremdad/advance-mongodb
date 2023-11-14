db.data.aggregate([
    // stage-1
    {
        $group: {
            _id: "null",
            totalSalary: { $sum: "$salary" },
            averageSalary: { $avg: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
        }
    },
    // stage-2
    {
        $project: {
            totalSalary: 1,
            maxSalary: 1,
            minSalary: 1,
            averageSalary: "$avgSalary",
            rangeBetweenManMin: { $subtract: ["$maxSalary", "$minSalary"] }
        }
    }
])