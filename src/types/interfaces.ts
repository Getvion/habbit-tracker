export interface IStore {
  createHabbitPopup: {
    isOpen: boolean;
    habbitData: {
      title: string;
      content: string;
    };
  };
}
