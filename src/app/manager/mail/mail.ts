
interface IMail {
  id: number;
  sender: ISender;
  body: string;
  client: IClient;
  description: string;
}

interface ISender {
  address: string;
  personal: string;
}