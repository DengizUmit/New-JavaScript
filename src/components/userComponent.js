import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User Component loaded.");

let logger1 = new MongoLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Rami", "Malek", "Santa Monica, California");
let user2 = new User(2, "Carly", "Chaikin", "Los Angeles, California");
userService.add(user1);
userService.add(user2);
console.log(userService.list())
console.log(userService.getById(1));

let customer = {
    id: 3,
    firstName: "Elliot"
};
// prototyping
customer.lastName = "Alderson";
console.log(customer);