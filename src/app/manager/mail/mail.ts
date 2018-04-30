
interface IMail {
  id: number;
  direction: string;
  sender: string;
  recepient: string;
  state: string;
  body: string;
  bodyType: string;
  client: IClient;
  description: string;
  address: string;
  messageId: string;
}


