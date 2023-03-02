  import { Dropdown, Checkbox } from "semantic-ui-react";
  
  <Dropdown
                              searchInput="rahul"
                              placeholder="Select Columns"
                              text={
                                <span style={{ color: "black" }}>{metricMap[selectedDimension[0]] + ` ${selectedDimension.length > 1 ? `+${selectedDimension.length - 1}` : ""}`}</span>
                              }
                              fluid
                              id="customOvpUsersListDropdown"
                              style={this.state.stylePd}
                              multiple
                              selection
                              open={this.state.openDropdown}
                              upward={false}
                              closeOnChange={false}
                              autoClose="outside"
                              ref={this.state.dropRef}
                              onBlur={(e) => {
                                if (e.relatedTarget) {
                                  let cls = e.relatedTarget.classList[0]
                                  if (cls !== 'hidden')
                                    this.setState({ openDropdown: false })
                                } else {
                                  this.setState({ openDropdown: false })
                                }
                              }}
                              onClick={(e, data) => {
                                this.setState({ openDropdown: !this.state.openDropdown });
                              }}
                            >
                              <Dropdown.Menu
                                open={this.state.openDropdown}
                                style={{ zIndex: "100", height: "218px", "border-radius": "0%", "box-shadow": "none" }}
                                onClick={(e) => {
                                  e.stopPropagation();

                                }}
                              >

                                <Dropdown.Menu
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                  open={this.state.openDropdown}
                                  style={{
                                    zIndex: "100",
                                    height: "181px", "border-radius": "0%", "box-shadow": "none",
                                    overflow: "auto",
                                    background: localStorage.getItem("theme") === "dark" ? "#414141" : ""
                                  }}
                                  id={'dropDown'}
                                  scrolling>

                                  {this.getWidgetOptions().map((option) => {
                                    return (
                                      <Dropdown.Item

                                        className="myItem" style={{ zIndex: "100" }}>
                                        <Checkbox
                                          label={option.text}
                                          checked={this.selectedCheck(option.value)}
                                          onClick={(e, data) => {
                                            this.handleDropdownChange(
                                              data.checked,
                                              option.value,
                                              "apply button"
                                            )
                                          }
                                          }
                                        />
                                      </Dropdown.Item>
                                    );
                                  })}
                                </Dropdown.Menu>
                                <div>
                                  <Button className="apply_btn" onClick={() => this.handleApplyButton()}>APPLY</Button>
                                </div>

                              </Dropdown.Menu>
                            </Dropdown>
