
export class LoginViewModel {
    Username!: string;
    Password!: string;
}
export class AccessViewModel {
    userid!: number;
    code!: string;
}
export class CurrentUserViewModel {
    exp!: number;
    iat!: number;
    nbf!: number;
    unique_name!: string;
    role!: string;
    userId!: number;
    Practices: UserPracticeViewModel[]
    selectedPractice: UserPracticeViewModel;
    RolesAndRights: UserRolesAndRights[];
    Menu: string[]
    constructor() {
        this.Practices = [];
        this.selectedPractice = new UserPracticeViewModel();
        this.RolesAndRights = [];
        this.Menu = [];
    }

}
export class UserPracticeViewModel {
    PracticeCode!: number
    PracticeName!: string;
}
export class UserRolesAndRights {
    UserId!: number;
    UserName!: string;
    Email!: string;
    ModuleId!: number;
    ModuleName!: string;
    SubModuleId!: number;
    SubModuleName!: string;
    PropertyId!: number;
    PropertyName!: string;
    Route!: string;
}