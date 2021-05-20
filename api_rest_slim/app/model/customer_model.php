<?php
namespace App\Model;

use App\Lib\Database;
use App\Lib\Response;

class CustomerModel
{
    private $db;
    private $table = 'clientes';
    private $response;
    
    public function __CONSTRUCT()
    {
        $this->db = Database::StartUp();
        $this->response = new Response();
    }
    
    public function GetAll()
    {
		try
		{
			$result = array();

			$stm = $this->db->prepare("SELECT * FROM $this->table");
			$stm->execute();
            
			$this->response->setResponse(true);
            $this->response->result = $stm->fetchAll();
            
            return $this->response;
		}
		catch(Exception $e)
		{
			$this->response->setResponse(false, $e->getMessage());
            return $this->response;
		}
    }
    
    public function Get($id)
    {
		try
		{
			$result = array();

			$stm = $this->db->prepare("SELECT * FROM $this->table WHERE id = ?");
			$stm->execute(array($id));

			$this->response->setResponse(true);
            $this->response->result = $stm->fetch();
            
            return $this->response;
		}
		catch(Exception $e)
		{
			$this->response->setResponse(false, $e->getMessage());
            return $this->response;
		}  
    }
    
    public function InsertOrUpdate($data)
    {
		try 
		{
            if(isset($data['id']))
            {
                $sql = "UPDATE $this->table SET 
                            primer_nombre          = ?, 
                            segundo_nombre        = ?,
                            primer_apellido          = ?,
                            segundo_apellido            = ?,
                            dni          = ?,
                            fecha_nacimiento    = ?,
                            direccion = ?
                        WHERE id = ?";
                
                $this->db->prepare($sql)
                     ->execute(
                        array(
                            $data['primer_nombre'], 
                            $data['segundo_nombre'],
                            $data['primer_apellido'],
                            $data['segundo_apellido'],
                            $data['dni'],
                            $data['fecha_nacimiento'],
                            $data['direccion'],
                            $data['id']
                        )
                    );
            }
            else
            {
                $sql = "INSERT INTO $this->table(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, dni, fecha_nacimiento, direccion) VALUES (?,?,?,?,?,?,?)";
                
                $this->db->prepare($sql)
                     ->execute(
                        array(
                            $data['primer_nombre'], 
                            $data['segundo_nombre'],
                            $data['primer_apellido'],
                            $data['segundo_apellido'],
                            $data['dni'],
                            $data['fecha_nacimiento'],
                            $data['direccion']
                        )
                    ); 
            }
            
			$this->response->setResponse(true);
            return $this->response;
		}catch (Exception $e) 
		{
            $this->response->setResponse(false, $e->getMessage());
		}
    }
    
    public function Delete($id)
    {
		try 
		{
			$stm = $this->db->prepare("DELETE FROM $this->table WHERE id = ?");			          

			$stm->execute(array($id));
            
			$this->response->setResponse(true);
            return $this->response;
		} catch (Exception $e) 
		{
			$this->response->setResponse(false, $e->getMessage());
		}
    }
}