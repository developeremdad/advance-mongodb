db.data.aggregate([
    // stage-1
    { $match: { gender: "Male" } },
    // stage-2
    { $addFields: { year: 2023,  course: { name: "Next level", batch: 2 } } },
    //stage-3
    { $project: { gender: 1, course: 1, year: 1 } }, 
    // stage-4
    { $out: "output-collection" },
    // stage-5
    // { $merge: "data" }
])