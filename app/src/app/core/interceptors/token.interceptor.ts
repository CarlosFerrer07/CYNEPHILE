import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    req = req.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });
  } else {
    console.log('not token found');
  }
  return next(req);
};
function jwtDecode(token: string) {
  throw new Error('Function not implemented.');
}
