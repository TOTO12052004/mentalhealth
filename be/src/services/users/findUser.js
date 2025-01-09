const { StatusCodes } = require("http-status-codes");
const BaseError = require("../../exception/BaseError");
const errThrower = require("../../exception/errorThrower");
const User = require("../../config/models/user");

const findUser = async (id) => {
    try {
        const user = await User.findOne({
            where : {
                id: id
            },
            attributes: ['id', 'username', 'fullname', 'role']
        })

        if(!user) {
            throw new BaseError({
                status: StatusCodes.NOT_FOUND,
                message: 'user not found'
            })
        }

        return {
            id: user.id,
            fullname: user.fullname,
            username: user.username,
            role: user.role
        }
    } catch (err) {
        throw errThrower(err)
    }
}
module.exports = findUser;