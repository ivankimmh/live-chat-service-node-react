const { resStatus } = require("../lib/responseStatus");
// const { User } = require("../models");

// navbar 정보 조회
exports.getContact = async (req, res, next) => {
  try {
    console.log("GET /contact 진입");
    // const user = await User.findOne({
    //   where: { id: req.headers.userid || null },
    // });
    res.status(resStatus.success.code).json({
      // 200
      data: user,
      message: resStatus.success.message, // success
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};