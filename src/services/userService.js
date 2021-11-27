export default class UserService {

    constructor(loggerService) {
        this.users = []; // getCustomersFromDb()
        this.loggerService = loggerService;
    };

    add(user) {
        this.users.push(user);
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(i => i.id)
    }
}