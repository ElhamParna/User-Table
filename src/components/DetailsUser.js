import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import userimage from "../Assets/img/user1.png";
import styles from "./DetailsUser.module.css";
import { AiFillDatabase } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import { BsBell } from "react-icons/bs";
import AddressMap from "./Map";

const DetailsUser = (props) => {
  const id = props.match.params.id;
  const data = useSelector((state) => state.UsersState.users);
  const users = data[id - 1];
  const {
    name,
    username,
    email,
    address,
    geo,
    phone,
    website,
    company,
  } = users;
  return (
    <>
      <div class="title">
        <h1>
          <span> user detais page </span>
        </h1>
      </div>

      <div
        class="container"
        style={{
          backgroundColor: "rgba(69, 69, 69, 0.3)",
          marginTop: "5px",
          borderRadius: "10px",
          padding: "30px",
          marginBottom: "50px",
        }}
      >
        <div class="row">
          <div class="col-12">
            <div className={styles.userInformationTop}>
              <div class="col-md-6" style={{minWidth:"50%"}}>
              <div className={styles.leftTitle}>
                <h5> my finance dashboard</h5>
                <p> welcome to y portal </p>
              </div>
              </div>
              <div class="col-md-6">
              <div className={styles.RightTitle}>
                <BsBell color="gray" fontSize="1.5em" />
                <img src={userimage} alt="userimg" />
                <h6> Hello {name}</h6>
              </div>
              </div>
            </div>

          </div>

          <div class="col-md-6 ">
            <div className={styles.userInformation}>
              <img src={userimage} alt="userimg" />
              <div className={styles.myProfile}>
                <div style={{minWidth:"100px" , textAlign:"left"}}>
                  <h5>My Profile</h5>
                  <span> My Id : {id}</span>
                </div>
                <div className={styles.name}>
                  <h6> {name} </h6>
                  <p>user name : {username}</p>
                </div>
              </div>

              <div className={styles.myInfo}>
                <div>
                  <p>phone : </p>
                </div>
                <div className={styles.name}>
                  <h6> {phone} </h6>
                </div>
              </div>
              <div className={styles.myInfo}>
                <div>
                  <p>email: </p>
                </div>
                <div className={styles.name}>
                  <h6> {email} </h6>
                </div>
              </div>

              <div className={styles.buttonBack}>
                <Link to="/user">Back to table</Link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-12">
                <div className={styles.userInformation}>
                  <div className={styles.personaltitle}>
                    <div>
                      <h5>Personal Information</h5>
                    </div>
                    <div>
                      <AiFillDatabase color="gray" fontSize="1.5em" />
                    </div>
                  </div>
                  <div className={styles.myWebsite}>
                    <h6>
                      <CgWebsite color="#5b906b" fontSize="1.5em" /> website :
                    </h6>
                    <p> {website} </p>
                  </div>
                  <div className={styles.myCompany}>
                    <h6>
                      <HiOutlineOfficeBuilding
                        color="#5b906b"
                        fontSize="1.5em"
                      />
                      company :
                    </h6>
                    <div >
                      <p>{company.name}</p>
                      <p>{company.catchPhrase}</p>
                      <p>{company.bs}</p>
                    </div>
                  </div>
                  <div className={styles.myAdress}>
                    <h6>
                      <TbAddressBook color="#5b906b" fontSize="1.5em" />
                      address :
                    </h6>
                    <div>
                      <p>
                        {address.street}, {address.suite}
                      </p>
                      <p>
                        {address.city} , {address.zipcode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/************** map **************/}
              <div class="col-12">
                <AddressMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsUser;
