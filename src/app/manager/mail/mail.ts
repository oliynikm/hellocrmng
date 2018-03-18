
interface IMail {
  id: number;
  sender: ISender;
  state: String;
  body: string;
  client: IClient;
  description: string;
  address: string;
  messageId: string;
}

interface ISender {
  address: string;
  personal: string;
}
