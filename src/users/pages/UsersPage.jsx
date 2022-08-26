import { Typography } from "@mui/material";
import { UsersLayout } from "../layout/UsersLayout";
import { AddUserView } from "../views";

export const UsersPage = () => {
  return (
    <UsersLayout>
        <AddUserView />
    </UsersLayout>
  )
}
