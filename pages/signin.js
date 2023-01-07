import { useSession, signIn, signOut } from "next-auth/react";
import PageLayout from "../components/PageLayout";
import { getSession} from "next-auth/react"

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <PageLayout>
      {" "}
      <div className="container-md pt-2">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card">
              <h5 class="card-header">Be a Hero - Your calories is your healthbar</h5>
              <div class="card-body">
                <p class="card-text">
                  Welcome to a very powerfool tool! Use it with care, we dont want to make you to develop an Eating Disorder!
                </p>
                {session ? (
                  <>
                    You are actually signed as {session.user.email} <br />
                    <br />
                    <button
                      className="btn btn-primary"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => signIn()}
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
  
    if (session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
  
    return {
      props: { session }
    }
  }