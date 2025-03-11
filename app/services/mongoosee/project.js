const { NotFoundError, BadRequestError } = require('../../errors')
const Projects = require('../../api/v1/projects/model')

const getAllProject = async (req) => {
    const { keyword } = req.query

    let condition = {}

    if(keyword){
        condition = { ...condition, name: { $regex: keyword, $options: 'i'}}
    }

    const result = await Projects.find(condition)

    return result
}

const getOneProject = async (req) => {
    const { id } = req.params

    const result = await Projects.findOne({ _id: id})

    if(!result) throw new NotFoundError(`Tidak ada project dengan id: ${id}`)

    return result
}

const createProject = async (req) => {
    const { name, category, image, href, desc, pinned } = req.body

    const check = await Projects.findOne({ name})

    if(check) throw new BadRequestError('project duplikat')

    const result = await Projects.create({name, category, image, href, desc, pinned})

    return result
}

const deleteProject = async (req) => {
    const { id } = req.params

    const result = await Projects.findOneAndDelete({
        _id: id,
    })

    if(!result) throw new NotFoundError(`Tidak ada project dengan id: ${id}`)

    return result
}


module.exports = {
    createProject,
    getAllProject,
    getOneProject,
    deleteProject,
}

