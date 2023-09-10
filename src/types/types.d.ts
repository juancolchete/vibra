interface wallet {
  mnemonic: string;
  address: string;
  nonceDREX: number,
  nonceLIDO: number,
  nonceICP: number,
  nonceLAC: number,
  loaded: boolean;
}

interface balance{
  drex: number;
  icp: number;
  wDrex: number;
  stEth: number;
}

interface walletProperty{
  prop: "mnemonic"|"address"|"nonceDREX"|"nonceLIDO"|"nonceICP"|"nonceLAC",
  value: string | number | never;
}
