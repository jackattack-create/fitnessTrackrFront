import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { callApi } from "../../api";



const SingleRoutine = ({ routines, token, userData }) => {

  const History = useHistory()
  let { routineId } = useParams();
  routineId = parseInt(routineId)
  const routine = routines.find((routine) => routineId === routine.id);
  console.log("SINGLE ROUTINE", routine);

//   const deleteRoutine = async (event) => {
//     try {
//       const routine  = await callApi({
//         url: `/routines/${routineId}`,
//         method: "DELETE",
//         token,
//       });
//       History.push('/routine')
//     } catch (error) {
//       console.log("error deleting post", error)
//     }
    
//   };

  const IsUserHere = userData.id === routine.creatorId;

  return (
    <>
      {routine ? (
        <section className="singlePost">
          <div className="post-title">
            <h1 className="Single-name">{routine.name}</h1>
            <h3 className="post-author">by {routine.creatorId}</h3>
            <>
              {IsUserHere ? (
                <button 
                onClick={(event) => {
                  deleteRoutine(),
                  History.push('/routines')
                }}>Delete post</button>
              ) : ''}
            </>
          </div>
          <div className="single-info">
           
            {/* <div className="postButtons">
              <>
              {IsUserHere ? (
                <Link to={`/routines/:routineId/edit`}>
                <button>Edit Routine</button>
                </Link>
              ) : ''}
              </>
              
            </div> */}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default SingleRoutine;