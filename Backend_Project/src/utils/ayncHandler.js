
// using promise we are using catch instead of the word reject function is same
const asyncHandler = (requestHandler) => {

    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    }


}

// we are using try ,catch more understandable method for me

// const asyncHandler = (requestHandler) => aync (req, res, next) => {
//     try {
//         await requestHandler(req, res, next)
//     }
//     catch (err) {
//         res.status(err.code || 500)
//         .json({
//             success : false,
//             message: err.message || "Internal Server Error"
//         })
//     }
// }

export { asyncHandler }

