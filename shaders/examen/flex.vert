#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform int mode = 1;
uniform float time;

const float ankle = 0.1;
const float knee = 0.48;

vec3 rot(vec3 P, float O, vec3 C, float cutoff){
	mat3 rotX = mat3((vec3(1,0,0)),vec3(0,cos(O),sin(O)),vec3(0,-sin(O),cos(O)));	
	vec3 Q = (rotX*(P-C))+C;
		
	float t = smoothstep(cutoff-0.05, cutoff+0.05, vertex.y);
	return (1-t)*P + t*Q;
}

void main()
{
	vec3 Q;
	if (mode == 1) {
		float O = abs(sin(time))/2.0;
		vec3 C = vec3(0,ankle,0);
		Q = rot(vertex,O,C,ankle);	
	}
	else {

		float O1= abs(sin(time))/2.0;
		vec3 C = vec3(0,ankle,0);
		Q = rot(vertex,O1,C,ankle);
		float O2 = -0.7*abs(sin(time));
		C = vec3(0,cos(O1)*knee,sin(O1)*knee);
		Q = rot(Q,O2,C,knee);	
	}

    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(1,1,1,1.0) * N.z;
    vtexCoord = texCoord;
    gl_Position = modelViewProjectionMatrix * vec4(Q, 1.0);

}
