export interface IHabbit {
  title: string;
  content: string;
}

export interface IStore {
  createHabbitPopup: {
    isOpen: boolean;
    habbitData: IHabbit;
  };
  habbits: {
    habbitsList: IHabbit[];
  };
}
