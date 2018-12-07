export class RepositorySearchResponse {
  incomplete_results: boolean;
  items: Array<RepositorySearchResponseItem>;
  total_count: number;
}

export class RepositorySearchResponseItem {
  id: number;
  full_name: string;
  owner: Owner;
  language: string;
}

export class Owner {
  id: number;
  login: string;
  url: string;
}
