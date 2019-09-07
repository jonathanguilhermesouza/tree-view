import { Repository } from "./repository.model";

export class RepositorySearch {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

