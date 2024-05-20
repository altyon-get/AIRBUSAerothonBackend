const Cord = require('../models/cord');

class CordRepository {
    async create(data) {
        try {
            const response = Cord.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const response = await Cord.find({});
            return response;
        } catch (error) {
            throw error;
        }
    }
    async findOne(data) {
        try {
            const response = await Cord.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async findOneAndUpdate(data, newdata) {
        try {
            const response = await Cord.findOneAndUpdate(
                data,
                newdata
            );
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CordRepository;