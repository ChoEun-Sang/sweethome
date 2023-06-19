// Common Header
const headers = {
  "content-type": "application/json",
  apikey: "KDT5_nREmPe9B",
  username: "KDT5_Team9"
};

// Common Interface
interface User {
  email: string;
  password: string;
}

// Sign-Up 회원가입
interface SignUpBody extends User {
  displayName: string;
}

const signUp = async (body: SignUpBody) => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

// Log-In 로그인
const logIn = async (event: React.FormEvent, body: User) => {
  event.preventDefault();
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
  );
  const json = await res.json();
  console.log(json);
  localStorage.setItem("token", json.accessToken);
};


// Log-Out 로그아웃
const logOut = async () => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout",
    {
      method: "POST",
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const json = await res.json();
  console.log(json);
};

// 로그인 인증
const authenticate = async () => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me",
    {
      method: "POST",
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const json = await res.json();
  console.log('로그인 인증 API',json);
  return json;
};

// Users 사용자 목록
const users = async () => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/users",
    {
      method: "GET",
      headers: {
        ...headers,
        masterKey: "true"
      }
    }
  )
  const data = await res.json();
  console.log(data);
  return data;
}


// Add-Product 상품등록
interface AddProductBody {
  title: string;
  price: number;
  description: string;
  tags?: string;
  thumbnailBase64?: string;
  photoBase64?: string;
  discountRate?: number;
}

const addProduct = async (body: AddProductBody) => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/products",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "KDT5_nREmPe9B",
        username: "KDT5_Team9",
        masterKey: "true"
      },
      body: JSON.stringify(body)
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};

// 상품 조회
type ResponseValue = Product[] // 관리하는 모든 제품의 목록

interface Product {
  id: string
  title: string
  price: number
  description: string
  tags: string[]
  thumbnail: string | null
  isSoldOut: boolean
  discountRate: number
}

const getAllProducts = async () => {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
    {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'apikey': 'KDT5_nREmPe9B',
        'username': 'KDT5_Team9',
        'masterKey': 'true'
      }
    })
  const data = await res.json()
  console.log(data)
  return data
}

// 상품 삭제
const deleteProduct = async (id: string) => {
  try {
    await fetch(
      `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
      {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT5_nREmPe9B',
          'username': 'KDT5_Team9',
          'masterKey': 'true'
        }
      })
  } catch (error) {
    console.log ('상품 삭제 error', error)
  }

}

export { 
  signUp, logIn, logOut, authenticate,
  users,
  addProduct, getAllProducts, deleteProduct
};
