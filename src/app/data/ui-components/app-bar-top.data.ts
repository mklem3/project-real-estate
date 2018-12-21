
export class AppBarTopData {
  public title: string = '';
  public options: AppBarTopOption[] = [];

  constructor(title: string, options: AppBarTopOption[]) {
    this.title = title;
    this.options = options;
  }
}

export class AppBarTopOption {
  public icon: string = '';
  public onClick: () => void;

  constructor(icon: string, onClick: () => void) {
    this.icon = icon;
    this.onClick = onClick;
  }
}