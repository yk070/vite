import ElBn_mx_ac_mass from '../ElBn/ElBn_mx_ac_mass';  
import Oj_mass1 from '../Oj/Oj_mass1.jsx';
import Oj_mass2 from '../Oj/Oj_mass2.jsx';
import React, { useRef, useState, useEffect,  useMemo, useLayoutEffect  } from "react";
import Cv_SgIdMoKy_ElTxMoKy from '../Cv/Cv_SgIdMoKy_ElTxMoKy';
import {   SgLeBase, SgLeMxMargin, SgLe_tx} from '../Sg/SgLeBase.jsx';
        ///X_X|  🗺ElRn_mx_ac_mass
          const ElRn_mx_ac_mass = () => {
            ///X_X const
                    const parentContainerRef = useRef(null);
                    const scrollPos = useRef(0);     //O_O
              const handleScroll = (e) => {
                scrollPos.current = e.target.scrollTop;
              };
              // 再レンダリング後にスクロール位置を復元
              useLayoutEffect(() => {
                if (parentContainerRef.current) {
                  parentContainerRef.current.scrollTop = scrollPos.current;
                }
              }, []);
            //O_O
            return (
              <>
                {/*X_X divi */}
                    <div        
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        
                        overflowX: "hidden",
                        overflowY: "auto",
                        overscrollBehavior: "contain",
                      }}
                      ref={parentContainerRef} 
                      onScroll={handleScroll}
                    >       
                {/*O_O*/}
                  {/*X_X divi */}
                      <div        
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "80%",
                          
                          display: "flex",
                          flexDirection: "row",
                          background: "green", 
                        }}
                      >       
                  {/*O_O*/}
                    {/*X_X wrap Oj_mass1*/}
                      {/*X_X divi 全体*/}
                          <div        
                            style={{
                            
                              position: "relative",
                              height: "100%",
                              width: "100%",
                              flex: 1,
                              
                              display: "flex",
                              flexDirection: "column",
                              
                              background: "blue", 
                            }}
                          >       
                      {/*O_O*/}
                        {/*X_X divi title*/}
                            <div        
                              style={{
                              
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                flex: 1,
                                
                                
                                background: "blue", 
                              }}
                            >       
                        {/*O_O*/}
                      <span
                        style={{        
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%", 
                          height: "100%",     
                          display: "flex",
                          alignItems: "center",   
                          fontSize: `calc(${SgLe_tx})`,
                          textIndent: `${SgLeMxMargin}`,
                          textAlign:  "center",
                          userSelect: "none",
                          pointerEvents: "auto",
                          whiteSpace: "nowrap",
                          padding: "0em 0em",
                          borderRadius: "0px",
                          fontSleepmily: "'Noto Sans JP', sans-serif",
                          color: "black",
                          zIndex: 2,
                        }}
                      >
                        s
                      </span>
                        </div>
                        {/*X_X divi マス*/}
                            <div        
                              style={{
                              flex: 5,
                                position: "relative",
                                height: "100%",
                                width: "100%",
                                
                                
                                background: "yellow", 
                                overflowX: "hidden",
                                display: "grid",
                                gridTemplateColumns: `repeat(${Oj_mass1.No_width}, 1fr)`,
                                boxSizing: "border-box",
                                padding: `calc(${SgLeBase} * 10)`,
                              }}
                            >       
                        {/*O_O*/}
                          {Oj_mass1.AyOj_SgIdMoKy_x_y.map((Oj_SgIdMoKy_x_y) => {
                            const { SgIdMoKy, x, y } = Oj_SgIdMoKy_x_y ;
                            const ElTxMoKy = Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy);
                            ///X_X Oj_props
                              const Oj_props = {   
                                ElTxMoKy,
                              };
                            //O_O
                            return (
                              <React.Fragment key={SgIdMoKy}>
                                  <ElBn_mx_ac_mass {...Oj_props}/>
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    {/*O_O*/}
                    {/*X_X wrap Oj_mass2*/}
                      {/*X_X divi マス*/}
                          <div        
                            style={{
                            
                              position: "relative",
                              flex: 1,
                              height: "100%",
                              display: "flex",
                              flexDirection: "column",
                              
                              background: "red", 
                              overflowX: "hidden",
                              display: "grid",
                              gridTemplateColumns: `repeat(${Oj_mass2.No_width}, 1fr)`,
                              boxSizing: "border-box",
                              padding: `calc(${SgLeBase} * 10)`,
                            }}
                          >       
                      {/*O_O*/}
                        {Oj_mass2.AyOj_SgIdMoKy_x_y.map((Oj_SgIdMoKy_x_y) => {
                          const { SgIdMoKy, x, y } = Oj_SgIdMoKy_x_y ;
                          const ElTxMoKy = Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy);
                          ///X_X Oj_props
                            const Oj_props = {   
                              ElTxMoKy,
                            };
                          //O_O
                          return (
                            <React.Fragment key={SgIdMoKy}>
                              {/*X_X divi ボタン*/}
                                <div
                                  key={SgIdMoKy}            
                                  style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    background: "#111111",
                                  }}
                                >
                              {/*O_O*/}
                                <ElBn_mx_ac_mass {...Oj_props}/>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                      
                    {/*O_O*/}
                  </div>
                  {/*X_X divi */}
                      <div        
                        style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          height: "100%",
                          background: "blue", 
                        }}
                      >       
                  {/*O_O*/}
                    {/*X_X wrap Oj_mass3*/}
                      {/*X_X divi */}
                          <div        
                            style={{
                              flex: 1,
                              position: "relative",
                              display: "flex",
                              flexDirection: "column",
                              width: "100%",
                              background: "blue", 
                            }}
                          >       
                      {/*O_O*/}
                        {Oj_mass1.AyOj_SgIdMoKy_x_y.map((Oj_SgIdMoKy_x_y) => {
                          const { SgIdMoKy, x, y } = Oj_SgIdMoKy_x_y ;
                          const ElTxMoKy = Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy);
                          ///X_X Oj_props
                            const Oj_props = {   
                              ElTxMoKy,
                            };
                          //O_O
                          return (
                            <React.Fragment key={SgIdMoKy}>
                              {/*X_X divi */}
                                <div
                                  key={SgIdMoKy}            
                                  style={{
                                    position: "relative",
                                    display: "flex",
                                    width: "100%",
                                    height: "100%",
                                    background: "#111111",
                                  }}
                                >
                              {/*O_O*/}
                                <ElBn_mx_ac_mass {...Oj_props}/>
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    {/*O_O*/}
                  </div>
                </div>
              </>
            );
          };
        //O_O
        export default ElRn_mx_ac_mass;