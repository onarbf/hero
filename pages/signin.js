import { useSession, signIn, signOut } from "next-auth/react";
import PageLayout from "../components/PageLayout";
import { getSession } from "next-auth/react"

export default function SignIn() {
  const { data: session } = useSession();

  return (
    <PageLayout>
      {" "}
      <div className="container-md pt-2">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">CalBar - Your calories is your healthbar</h5>
              <div className="card-body">
                <p className="card-text">
                  Count your calories as you are the main character, with your own healthbar :D
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