import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(groupName: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupNameAlreadyTaken = storedGroups.includes(groupName);

    if (groupNameAlreadyTaken) {
      throw new AppError('Já existe um grupo com esse nome!')
    }

    const storage = JSON.stringify([...storedGroups, groupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
      throw error;
  }

}