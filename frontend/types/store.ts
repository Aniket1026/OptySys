import { DetailsFormData } from "./auth";
import { Experience, IUser, Social } from "./user";

export interface IUserStore {
  user: IUser;
  accessToken: string;

  setUser(user: IUser): void;
  setAccessToken(accessToken: string): void;
  getActivationStatus(): boolean;

  logoutUser(): void;
}

export interface IDashboardStore {
  isSidebarOpen: boolean;

  toggleSidebar(): void;
}

export interface IDetailsStore {
  details: DetailsFormData;

  setDetails(
    name: string,
    value: string | Array<string> | Array<Social> | Array<Experience>
  ): void;
}
