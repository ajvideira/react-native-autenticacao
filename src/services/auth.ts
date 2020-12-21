interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'hdasdh7839eyhq8fcq0hv07h02yrh2nbx8h37y',
        user: {
          name: 'Jonathan',
          email: 'jonathan.videira@gmail.com'
        }
      });
    }, 2000);
  });
}