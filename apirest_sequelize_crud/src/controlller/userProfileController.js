import { User } from "../models/user.js";
import { UserProfile } from "../models/userProfile.js";

export const createUserProfile = async (req, res) => {
    try {
        const {userId, bio, birthday, photo} = req.body;

        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({message: "usuario no encontrado"});
        }

        const existingProfile = await UserProfile.findOne({where: {userId: userId}})
        if (existingProfile) {
            return res.status(400).json({message: "el usuario ya tiene un perfil"})
        }

        const profile = await UserProfile.create({
            userId,
            bio,
            birthday,
            photo
        });
        return res.status(201).json(profile);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "error al crear perfil"});
    }
}