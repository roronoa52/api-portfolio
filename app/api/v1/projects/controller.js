const { createProject, deleteProject, getAllProject, getOneProject, } = require('../../../services/mongoosee/project')
const { StatusCodes } = require('http-status-codes')

const create = async (req, res, next) => {
    try{
        const result = await createProject(req)

        res.status(StatusCodes.OK).json({
            status_code: StatusCodes.CREATED,
            message: "Create Projects is Successfully",
            data: result
        })
    }catch(err){
        next(err)
    }
}

const index = async (req, res, next) => {
    try{
        const result = await getAllProject(req)

        res.status(StatusCodes.OK).json({
            status_code: StatusCodes.OK,
            message: "Get List Projects is Successfully",
            data: result 
        })
    }catch(err){
        next(err)
    }
}

const find = async (req, res, next) => {
    try{
        const result = await getOneProject(req)

        res.status(StatusCodes.OK).json({
            status_code: StatusCodes.OK,
            message: "Get Detail Projects is Successfully",
            data: result
        })
    }catch(err){
        next(err)
    }
}

const destroy = async (req, res, next) => {
    try{
        const result = await deleteProject(req)

        res.status(StatusCodes.OK).json({
            status_code: StatusCodes.OK,
            message: "Delete Detail Projects is Successfully",
            data: result
        })
    }catch(err){
        next(err)
    }
}

module.exports = {
    create,
    index,
    find,
    destroy
}