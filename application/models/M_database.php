<?php 

      defined('BASEPATH') OR exit ("No direct script access allowed");

      class M_database extends CI_Model{

            function select($table, $where = null){
                  
                  if($where != null){
                        $this->db->where($where);
                  }

                  $query = $this->db->get($table);

                  return $query;
            }

            function query_sql($query){

                  $this->db->reconnect();
                  
                  $query = $this->db->query($query);

                  return $query;
            }

            function insert($table, $data){
                  $this->db->insert($table, $data);

                  return $this->db->affected_rows();
            }

            function update($table, $data, $where){
                  $this->db->where($where);
                  $this->db->update($table, $data);
            }

            function delete($table, $where){
                  $this->db->where($where);
                  $this->db->delete($table);
            }



      }

 ?>