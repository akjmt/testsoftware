export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: number;
  category: string;
  solved: boolean;
}

export interface ProblemDetails extends Problem {
  description: string;
  examples: Example[];
  constraints: string[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}